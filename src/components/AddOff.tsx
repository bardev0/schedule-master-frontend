import { useContext, useEffect, useState } from "react";
import { TAddOffProps } from "../utils/types";
import mainArrayChanges from "../contexts/MainArrayChangeContext";
import routes from "../../../grefik-backend/src/routes";
import { mainRoute } from "../App";
import mainUserContext from "../contexts/MainUserContext";

export function AddOff(props: TAddOffProps) {
    // props.data[0] -> object
    // props.data[1] -> dispacher
    const [view, setView] = useState(true);
    // grab user somhow
    const [currentDayOff, setCDO] = useState("");
    const [daysOff, setDaysOff] = useState<any[]>([]);
    const [startingDate, setSD] = useState("");
    const [endDate, setED] = useState("");
    const [currentUser, setCurrentUser] = useState<any>();
    const [userList, setUserList] = useState<any[]>();
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

    const saveDate = () => {
        let tempAry = [...daysOff];
        console.log(tempAry);
        let newSingleDay = new Date(currentDayOff);
        tempAry.push(newSingleDay);
        setDaysOff([]);
        setDaysOff(tempAry);
        // chcek if one day is
    };

    const saveMultipleDates = () => {
        let newStartingDate = new Date(startingDate);
        let newEndDate = new Date(endDate);
        let datesArry = [];
        if (newEndDate <= newStartingDate) {
            alert(
                "Data zakonczenia urlopu nie moze byc wczesniejsza niz data jego rozpoczecia"
            );
        } else {
            for (
                let date = newStartingDate;
                date <= newEndDate;
                date.setDate(date.getDate() + 1)
            ) {
                datesArry.push(new Date(date));
            }
        }

        setDaysOff([...daysOff, ...datesArry]);
        /// error that ending date cant be eariler than staring one
    };

    let removeDate = (idx: number) => {
        let tempAry2 = [...daysOff];
        tempAry2.splice(idx, 1);
        setDaysOff(tempAry2);
    };

    let sendDates = () => {
        //
        let userOFFS = {
            user: currentUser,
            days: daysOff,
        };
        // send data to server

        fetch(`${mainRoute}${routes.addOffs}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userOFFS),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        // update main array
        // close window
        props.state[1](!props.state[0]);
        alert("dates Send");
        // cholernie złe rozwiązanie
        setTimeout("", 20);
        setChangeA(!changeA);
    };

    return (
        <>
            <div className="AddOffView subSetting">
                <button
                    onClick={() => {
                        props.state[1](!props.state[0]);
                    }}
                >
                    Close
                </button>
                <p>Select User</p>
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
                <button onClick={() => setView(!view)}>
                    {view ? "One Day" : "Many Days"}
                </button>
                {view ? (
                    <div>
                        <label>Select Day Off</label>
                        <input
                            type="date"
                            onChange={(e) => setCDO(e.target.value)}
                        ></input>
                        <button onClick={() => saveDate()}>Add Date</button>
                    </div>
                ) : (
                    <div>
                        <label>Select Start Date</label>
                        <input
                            type="date"
                            onChange={(e) => setSD(e.target.value)}
                        ></input>

                        <label>Select End Date</label>

                        <input
                            type="date"
                            onChange={(e) => setED(e.target.value)}
                        ></input>

                        <button
                            onClick={() => {
                                saveMultipleDates();
                            }}
                        >
                            Add Days
                        </button>
                    </div>
                )}

                <div>
                    {
                        //add removal of dates
                    }
                    <h2>Off</h2>
                    {daysOff.map((item, idx) => (
                        <p key={idx}>
                            {item.toDateString()}{" "}
                            <button
                                onClick={() => {
                                    removeDate(idx);
                                }}
                            >
                                DD
                            </button>
                        </p>
                    ))}
                </div>
                <button
                    onClick={() => {
                        sendDates();
                    }}
                >
                    Send Days OFF
                </button>
            </div>
        </>
    );
}
