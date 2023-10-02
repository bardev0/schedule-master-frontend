import { mainRoute } from "../App";
import routes from "../../../grefik-backend/src/routes";
import { GrafkBody } from "../utils/types";


export function ScheduleStats() {
    // send post to server to grab one schedule from db
    // calc stats on server
    // wait for data
    // display



    const grabOneGrafik = (user: string | null, id: string | null) => {
        let data: GrafkBody = {
            user:user,
            id: id
        }

        fetch(`${mainRoute}${routes.grabOneGrafik}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };
    return (
        <>
            <div>
                <div>Grafik nr {localStorage.getItem("scheduleId")}</div>
                <button onClick={ () => grabOneGrafik(localStorage.getItem("mainUserId"), localStorage.getItem("scheduleId"))}>GRAB</button>
            </div>
        </>
    );
}
