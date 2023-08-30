import "./styles/App.css";
import SettingsBar from "./components/SettingsBar";
import { SingleMonthView } from "./components/SingleMonthView";
import { createYearMatrix, shapeYearMatrix } from "../../grafik-src/utils";
import { useState } from "react";
import { EditUsersView } from "./components/EditUsersView";
import { MainSettingsView  } from "./components/MainSettingsView";

function App() {
    // on first login grab and create new matrix
    let data = createYearMatrix(2023);
    let matrix = shapeYearMatrix(data, 2023);

    // add function that grabs current month from Data and displays it as default
    const [currentMonth, setCurrentMonth] = useState(0);

    const [displayEditUsersView, setDisplayEditUsersView] = useState({
        display: "none",
    });

    const [displayMainSettings, setDisplayMainSettings] = useState({
        display: "none",
    });

    const showEditUsers = [displayEditUsersView, setDisplayEditUsersView];
    const showMainSettings = [displayMainSettings, setDisplayMainSettings];

    return (
        <>
            <SettingsBar
                props={setCurrentMonth}
                states={showEditUsers}
                mainSettings={showMainSettings}
            ></SettingsBar>

            {
                // trzeba dodac zeby komponent nie bral calej array ale numer indexu z calej array
            }
            <div style={displayEditUsersView} className="editUsersView">
                <EditUsersView></EditUsersView>
            </div>
            <div style={displayMainSettings} className="mainSettingsView">
                <MainSettingsView></MainSettingsView>
            </div>
            

            <SingleMonthView
                array={matrix}
                currentDisplay={currentMonth}
            ></SingleMonthView>
        </>
    );
}

export default App;
