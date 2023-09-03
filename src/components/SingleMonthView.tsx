import { WeekDisplay } from "./WeekDisplay";
import { TMonthsProps } from "../utils/types";
export function SingleMonthView(props: TMonthsProps | undefined) {
    return (
        <>
            <div>
                {/** IF WEEK ARRAY IS EQUAL 0 do not display */}
                {props?.array[props.currentDisplay].map((week: any) => (
                    <WeekDisplay props={week}></WeekDisplay>
                ))}
            </div>
        </>
    );
}
