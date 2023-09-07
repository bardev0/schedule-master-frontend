import { useEffect, useState, useContext } from "react";
import { TGrafik } from "../../../grefik-backend/src/types";
import { ConvertProposedShiftsToActualOnes } from "./ConvertShiftsBtn";
import { NewGrafik } from "./NewGrafikComp";
import routes from "../../../grefik-backend/src/routes";
import { mainRoute } from "../App";
import mainUserContext from "../contexts/MainUserContext";

export function ScheaduleView(props: any) {
    const [lista, setLista] = useState<any>();
    const [isLChanged, setLChanged] = useState(false);

    const mainUserData = useContext(mainUserContext);

    const grabListeGrafikow = async () => {
        console.log(`${mainRoute + routes.scheduleList}`);
        await fetch("http://localhost:2345/scheduleList", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: mainUserData.id }),
        })
            .then((response) => response.json())
            .then((data) => setLista(data));
    };

    const deleteSchedule = (id: number) => {
        fetch(`${mainRoute + routes.removeSchedule}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: mainUserData.id, idG: id }),
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
            body: JSON.stringify({ id: mainUserData.id, idG: id }),
        })
            .then((response) => response.json())
            .then((data) => setLChanged(!isLChanged));
    };
    useEffect(() => {
        grabListeGrafikow();
    }, [isLChanged]);

    useEffect(() => {
        grabListeGrafikow();
    }, []);

    console.log(lista);
    return (
        <>
            <div className="scheaduleView">
                <h1>CURENT LIST OF SHEADULES</h1>
                <button
                    onClick={() => {
                        grabListeGrafikow();
                        console.log(lista.default[0]);
                    }}
                >
                    DEBUG
                </button>
                <button>ADD NEW</button>
                <NewGrafik
                    stateOfList={[isLChanged, setLChanged]}
                    checkOtherG={[lista, setLista]}
                ></NewGrafik>
                {lista !== undefined ? (
                    lista.default.map((item: TGrafik, idx: number) => (
                        <div>
                            {item.id} {item.status}{" "}
                            <button>Preview Stats</button>
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
                    ))
                ) : (
                    <p>nie ma</p>
                )}
                <ConvertProposedShiftsToActualOnes></ConvertProposedShiftsToActualOnes>
                <p>
                    add button to print scheadule for selected period<br></br>
                    Work on stats
                </p>
            </div>
        </>
    );
}
