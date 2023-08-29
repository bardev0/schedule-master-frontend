import { WeekDisplay } from "./WeekDisplay";
import { TMonthsProps } from "../types";
export function SingleMonthView(props: TMonthsProps) {
    console.log(props.array);
    console.log(props.currentDisplay)
    return (
        <>
            <div>
                {props.array[props.currentDisplay].map((week: any) => (
                    <WeekDisplay props={week}></WeekDisplay>
                ))}
            </div>
        </>
    );
}
