import "./styles/App.css";
import SettingsBar from "./components/SettingsBar";
import { SingleMonthView } from "./components/SingleMonthView";
import { createYearMatrix, shapeYearMatrix } from "../../grafik-src/utils";
import { useEffect, useState } from "react";
import { EditUsersView } from "./components/EditUsersView";
import { MainSettingsView } from "./components/MainSettingsView";

function App() {
    // on first login grab and create new matrix
    let data = createYearMatrix(2023);
    let matrix = shapeYearMatrix(data, 2023);

    const [currentMonth, setCurrentMonth] = useState(0);

    /// do usunięcia -> drzewo zaleznosci
    const [daysToChangeArry, setDaysToChange] = useState<any>({})

    useEffect(() => {
        let date = new Date();
        setCurrentMonth(date.getMonth());
    }, []);


    //// do przesunięcia na backend
    useEffect( () => {
        console.log(daysToChangeArry)
        let user = daysToChangeArry.user
        if (user == undefined) {
            console.log("pierwsze uruchonmienie")
        } else {
            console.log(user)
        }
        console.log(matrix)
    }, [daysToChangeArry] )

    //// GOWNO FETCH -> doesnt work xDDDD 
    const sendtoBackend = () => {
        console.log('c')
       fetch("http://localhost:2345/updateMatrixOffDays", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(daysToChangeArry),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    
    return (
        <>
            <button onClick={ () => {sendtoBackend} }>DEBUG</button>
            <SettingsBar
                daysOff={[daysToChangeArry, setDaysToChange]}
                currentMonth={currentMonth}
                props={setCurrentMonth}
            ></SettingsBar>
            <SingleMonthView
                array={matrix}
                currentDisplay={currentMonth}
            ></SingleMonthView>
        </>
    );
}

export default App;
