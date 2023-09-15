import { useContext, useEffect, useState } from "react";
import mainArrayChanges from "../contexts/MainArrayChangeContext";
import mainUserContext from "../contexts/MainUserContext";
import { mainRoute } from "../App";
import routes from "../../../grefik-backend/src/routes";
export function AddPShift(props: any) {
    const [userList, setUserList] = useState<any[]>([]);
    const [currentUser, setCurrentUser] = useState<any>();
    const [currentShiftDay, setCSD] = useState("");
    const [propsedShifts, setPropsedShifts] = useState<any[]>([]);
    const [changeA, setChangeA] = useContext(mainArrayChanges);
    const mainUserData = useContext(mainUserContext);

    useEffect(() => {
        fetch(`${mainRoute}${routes.subUsersList}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ parentId: mainUserData.id }),
        })
            .then((response) => response.json())
            .then((data) => setUserList(data));
    }, []);

    let removeDate = (idx: number) => {
        let tempAry2 = [...propsedShifts];
        tempAry2.splice(idx, 1);
        setPropsedShifts(tempAry2);
    };
    const saveDate = () => {
        let tempAry = [...propsedShifts];
        console.log(tempAry);
        let newSingleDay = new Date(currentShiftDay);
        tempAry.push(newSingleDay);
        setPropsedShifts([]);
        setPropsedShifts(tempAry);
        // chcek if one day is
    };

    let sendProposedShiftDays = () => {
        //
        let userProposedShifts = {
            user: currentUser,
            days: propsedShifts,
        };
        // send data to server

        fetch(`${mainRoute}${routes.addProposedShifts}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userProposedShifts),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        // update main array
        // close window
        props.state[1](!props.state[0]);
        alert("proposed shifts SEND!");
        // cholernie złe rozwiązanie
        setChangeA(!changeA);
    };

    return (
        <>
            <div className="AddPShiftView subSetting">
                <div className="subSettingHeader">
                    <h2>Add Propsed Shift</h2>
                    <button
                        onClick={() => {
                            props.state[1](!props.state[0]);
                        }}
                    >
                        Close
                    </button>
                </div>

                <select
                    onChange={(e) => {
                        setCurrentUser(e.target.value);
                    }}
                >
                    <option selected>Select User</option>
                    {userList?.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                <p>{currentUser}</p>
                <div>
                    <label>Select Day for propsed shift for user</label>
                    <input
                        type="date"
                        onChange={(e) => setCSD(e.target.value)}
                    ></input>
                    <button onClick={() => saveDate()}>Add Date</button>
                </div>
                <p>Selected shifts propsed for user</p>
                {propsedShifts.map((item, idx) => (
                    <div>
                        <p>{item.toDateString()}</p>
                        <button
                            onClick={() => {
                                removeDate(idx);
                            }}
                        >
                            DD
                        </button>
                    </div>
                ))}
                <button
                    onClick={() => {
                        sendProposedShiftDays();
                    }}
                >
                    SEND PROPSED SHIFTS
                </button>
            </div>
        </>
    );
}
