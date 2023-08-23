import "./App.css";

import { createYearMatrix } from "../../grafik-src/utils";
import { shapeYearMatrix } from "../../grafik-src/utils";
import { TDay } from "../../grafik-src/types";

function smartMonths(monthIdntifier: number) {
    let months = [
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

    return months[monthIdntifier - 1];
}

function SettingsBar() {
    return (
        <>
            <div className="settings">
                <h1>Hello World</h1>
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

function MonthDisplay(props) {
    console.log(props.props[1][0].monthId);
    return (
        <>
            <div>
                <h1>{smartMonths(props.props[1][0].monthId)}</h1>
                <DayLabelBar></DayLabelBar>
                {props.props.map((week) => (
                    <WeekDisplay props={week}></WeekDisplay>
                ))}
            </div>
        </>
    );
}
function App() {
    // console.log(createYearMatrix(2023))
    let data = createYearMatrix(2023);
    let matrix = shapeYearMatrix(data, 2023);
    return (
        <>
            <SettingsBar></SettingsBar>
            <div className="calWin">
                {matrix.map((a0) => (
                    <div className="msc">
                        <MonthDisplay props={a0}></MonthDisplay>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
