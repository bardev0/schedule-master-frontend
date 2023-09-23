import { WeekDisplay } from "./WeekDisplay";
import { TMonthsProps } from "../utils/types";
import { TDay } from "../../../grefik-backend/src/types";

export function SingleMonthView(props: TMonthsProps) {
    console.log(props);
    // przepisac single month selector zeby akcptował rok i miesiąc
    return (
        <>
            <div>
                {/** IF WEEK ARRAY IS EQUAL 0 do not display
                 * NIE DZIALA styczeń 2024 => jest w array, źle się wyświetla
                 */}
                {props.arrayData[props.year][props.month].map((week: Array<TDay>) => {
                    console.log(week);
                    if (week.length == 0) {
                        return <></>
                    } else {
                        return <WeekDisplay week={week}></WeekDisplay>;
                    }
                })}
                {/* {props?.array[props.currentDisplay].map((week: any) => (
                    <WeekDisplay props={week}></WeekDisplay>
                ))} */}
            </div>
        </>
    );
}
