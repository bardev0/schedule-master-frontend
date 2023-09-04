import { useEffect, useState } from "react";
import { TGrafik } from "../../../grefik-backend/src/main";
import { ConvertProposedShiftsToActualOnes } from "./ConvertShiftsBtn";
import { NewGrafik } from "./NewGrafikComp";

export function ScheaduleView(props: any) {
    const [lista, setLista] = useState<any[]>([]);
    const [isLChanged, setLChanged] = useState(false);

    const grabListeGrafikow = () => {
        fetch("http://localhost:2345/scheaduleList", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setLista(data));
    };

    const deleteSchedule = (id: number) => {
        fetch("http://localhost:2345/removeSchedule", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idG: id }),
        })
            .then((response) => response.json())
            .then((data) => setLChanged(!isLChanged));
    };

    const changeStatus = (id: number) => {
        fetch("http://localhost:2345/changeStatus", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idG: id }),
        })
            .then((response) => response.json())
            .then((data) => setLChanged(!isLChanged));
    };
    useEffect(() => {
        grabListeGrafikow();
    }, [isLChanged]);
    return (
        <>
            <div className="scheaduleView">
                <h1>CURENT LIST OF SHEADULES</h1>

                <button>ADD NEW</button>
                <NewGrafik
                    stateOfList={[isLChanged, setLChanged]}
                    checkOtherG={[lista, setLista]}
                ></NewGrafik>
                {lista.map((item: TGrafik, idx) => (
                    <div>
                        {item.id} {item.status} <button>Preview Stats</button>
                        {item.status == "active" ? (
                            <button onClick={() => changeStatus(item.id)}>
                                Close
                            </button>
                        ) : (
                            <p></p>
                        )}
                        <button
                            onClick={() => {
                                deleteSchedule(item.id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
                <ConvertProposedShiftsToActualOnes></ConvertProposedShiftsToActualOnes>
                <p>
                    add button to print scheadule for selected period<br></br>
                    Work on stats
                </p>
            </div>
        </>
    );
}
