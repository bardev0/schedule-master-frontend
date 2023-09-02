import { useState } from "react";

export function AddOff() {
    const [view, setView] = useState(true);
    // grab user somhow
    const [currentDayOff, setCDO] = useState("");
    const [daysOff, setDaysOff] = useState<any[]>([]);
    const [startingDate, setSD] = useState("");
    const [endDate, setED] = useState("");

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
        console.log(newEndDate);
        console.log(newStartingDate);
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

        console.log(datesArry);
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

        // close window
        alert("dates send to mgm");
    };

    return (
        <>
            <div className="datepicker">
                <button onClick={() => setView(!view)}>
                    {view ? "One Day" : "Many Days"}
                </button>
                {view ? (
                    <div>
                        <label>Select Day Off</label>
                        <p>Date selected : {currentDayOff}</p>
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
                                onClick={(e) => {
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
                    Send Days OFF TO MANAGER{" "}
                </button>
            </div>
        </>
    );
}
