import { useContext } from "react";
import mainArrayChanges from "../contexts/MainArrayChangeContext";
export function ConvertProposedShiftsToActualOnes() {
    // reach endpoint on server to do a switch
    const [changeA, setChangeA] = useContext(mainArrayChanges);

    const sendConvert = () => {
        fetch("http://localhost:2345/convertShiftsToActive", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        setChangeA(!changeA);
    };

    // update main array
    return (
        <>
            <div>
                <button onClick={() => sendConvert()}>
                    Convert Propsed Shifts For Active Scheadules
                </button>
            </div>
        </>
    );
}
