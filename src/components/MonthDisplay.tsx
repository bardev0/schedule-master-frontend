import { DayLabelBar } from "./DayLabelBar";
import { smartMonths } from "../utils/logic";
import { WeekDisplay } from "./WeekDisplay";
export function MonthDisplay(props: any) {
    return (
        <>
            <div>
                <h1>{smartMonths(props.props[1][0].monthId)}</h1>
                <DayLabelBar></DayLabelBar>
                {props.props.map((week: any) => (
                    <WeekDisplay props={week}></WeekDisplay>
                ))}
            </div>
        </>
    );
}
