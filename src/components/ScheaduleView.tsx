import { useEffect, useState } from "react";
import { TGrafik } from "../../../grefik-backend/src/main";

export function ScheaduleView(props: any) {
    const [lista, setLista] = useState<any[]>([]);
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

    useEffect(() => {
        grabListeGrafikow();
    }, []);
    return (
        <>
            <div className="scheaduleView">
                <h1>CURENT LIST OF SHEADULES</h1>
                {lista.map((item: TGrafik, idx) => (
                    <div>
                        {item.id} {item.start} {item.end} {item.status}
                    </div>
                ))}
            </div>
        </>
    );
}
