import { WeekDisplay } from "./WeekDisplay";
import { TMonthsProps } from "../types";
export function SingleMonthView(props: TMonthsProps) {
    console.log(props.array);
    console.log(props.currentDisplay);
    return (
        <>
            <div>
                {/** IF WEEK ARRAY IS EQUAL 0 do not display */}
                {props.array[props.currentDisplay].map((week: any) => (
                    <WeekDisplay props={week}></WeekDisplay>
                ))}
            </div>
        </>
    );
}
