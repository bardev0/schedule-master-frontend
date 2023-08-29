import "./App.css";
import SettingsBar from "./components/SettingsBar";
import { SingleMonthView } from "./components/SingleMonthView";
import { createYearMatrix, shapeYearMatrix } from "../../grafik-src/utils";
import { useState } from "react";


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
            <SingleMonthView array={matrix} currentDisplay={currentMonth}></SingleMonthView>
        </>
    );
}

export default App;
