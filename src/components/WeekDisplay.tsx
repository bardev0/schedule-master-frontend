import { TDay } from "../../../grefik-backend/src/types";
import { DayDisplay } from "./DayDisplay";
export function WeekDisplay(props: any) {
    // console.log(props.props);
    return (
        <>
            <div className="weekRow">
                {props.props.map((w: TDay) => {
                    if (w == undefined) {
                        return <span></span>;
                    } else {
                        // split this into components
                        return <DayDisplay w={w}></DayDisplay>;
                    }
                })}
            </div>
        </>
    );
}
