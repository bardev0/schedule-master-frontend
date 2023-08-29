import "./App.css";
import SettingsBar from "./components/SettingsBar";
import { createYearMatrix, shapeYearMatrix } from "../../grafik-src/utils";
import { TDay } from "../../grafik-src/types";
import { smartMonths } from "./logic";

export function ViewSelector() {
    return (
        <>
        <div>
            <div>Select Month</div>
            <select>
                <option value={1}>January</option>
            </select>

            <select>
                <option value={2023}>2023</option>
            </select>
        </div>
        </>
    )    
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

function SingleMonthView(props: any) {

		console.log(props)
    return (
        <>
            <div>
						{
							props.props.map( (week: any) => <WeekDisplay props={week}></WeekDisplay> )
						}
						</div>
        </>
    );
}

function MonthDisplay(props:any) {
    console.log(props.props[1][0].monthId);
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
function App() {
    // console.log(createYearMatrix(2023))
    let data = createYearMatrix(2023);
    let matrix = shapeYearMatrix(data, 2023);

    let oneMonth = matrix[0];
    return (
        <>
						<SettingsBar></SettingsBar>
						<SingleMonthView props={oneMonth}></SingleMonthView>
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
