import { useState } from "react";

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
                start: stratDate,
                end: endDate,
            };
            fetch("http://localhost:2345/addSchedule", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(newG),
                headers: { "Content-type": "application/json" },
            })
                .then((response) => response.json())
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
