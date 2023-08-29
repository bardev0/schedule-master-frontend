import "./App.css";
import SettingsBar from "./components/SettingsBar";
import { createYearMatrix, shapeYearMatrix } from "../../grafik-src/utils";
import { TDay } from "../../grafik-src/types";
import { smartMonths } from "./logic";
import { useState } from "react";



export function ViewSelector(props: any) {
    
    const monthsUTC = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const monthsNUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            <div>
                <div>Select Month</div>
                <select onChange={(e) => props.setM(e.target.value)}>
                    {monthsNUM.map((_idx, val) => (
                        <option value={val}>{monthsUTC[val]}</option>
                    ))}
                </select>

                <select>
                    <option value={2023}>2023</option>
                </select>
            </div>
        </>
    );
}

function DayLabelBar() {
    return (
        <>
            <div className="dayLabelBar">
                <span>Pn</span>
                <span>Wt</span>
                <span>Sr</span>
                <span>Cz</span>
                <span>Pt</span>
                <span>So</span>
                <span>Nd</span>
            </div>
        </>
    );
}

function WeekDisplay(props: any) {
    // console.log(props.props);
    return (
        <>
            <div className="week">
                {props.props.map((w: TDay) => {
                    if (w == undefined) {
                        return <span></span>;
                    } else {
                        return <p>{w.dayNum}</p>;
                    }
                })}
            </div>
        </>
    );
}

function SingleMonthView(props: TMonthsProps) {
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

function MonthDisplay(props: any) {
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

type TMonthsProps = {
    array: Array<any>,
    currentDisplay: number
}
function App() {
    // console.log(createYearMatrix(2023))
    let data = createYearMatrix(2023);
    let matrix = shapeYearMatrix(data, 2023);

    let oneMonth = matrix[0];

    // add function that grabs current month from Data and displays it as default
    const [currentMonth, setCurrentMonth] = useState(1)

    console.log(currentMonth)
    return (
        <>
            <div>{currentMonth}</div>
            <SettingsBar props={setCurrentMonth}></SettingsBar>

            {
// trzeba dodac zeby komponent nie bral calej array ale numer indexu z calej array
            }
            <SingleMonthView array={matrix} currentDisplay={currentMonth - 1}></SingleMonthView>
            {/** `<SettingsBar></SettingsBar>`
            `<SingleMonthView month={oneMonth}></SingleMonthView>`
            {`<div className="calWin">
                {matrix.map((a0) => (
                    <div className="msc">
                        <MonthDisplay props={a0}></MonthDisplay>
                    </div>
                ))}
            </div>`**/}
        </>
    );
}

export default App;
