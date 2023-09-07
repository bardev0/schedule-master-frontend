import { useState } from "react";
import { mainRoute } from "../App";
import routes from "../../../grefik-backend/src/routes";
export function NewGrafik(props: any) {
    const [stratDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const checkAndSend = () => {
        if (new Date(stratDate) >= new Date(endDate)) {
            alert(
                "data rozpoczecia nie moze byc pozniejsza niz data zakonczenia"
            );
        } else {
            let newG = {
                id: localStorage.getItem("id"),
                start: stratDate,
                end: endDate,
            };
            console.log(newG);
            fetch(`${mainRoute + routes.addSchedule}`, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(newG),
                headers: { "Content-type": "application/json" },
            })
                .then((response) => response.json())
                // .then( d => console.log(d))
                .then((d) => props.stateOfList[1](!props.stateOfList[0]));
        }
    };

    return (
        <>
            <div>
                <label>Start Date</label>
                <input
                    onChange={(e) => {
                        setStartDate(e.target.value);
                    }}
                    type="date"
                ></input>
                <label>End Date</label>
                <input
                    onChange={(e) => {
                        setEndDate(e.target.value);
                    }}
                    type="date"
                ></input>

                <button
                    onClick={(e) => {
                        checkAndSend();
                    }}
                >
                    save
                </button>
                <p>{stratDate}</p>
                <p>{endDate}</p>
            </div>
        </>
    );
}
