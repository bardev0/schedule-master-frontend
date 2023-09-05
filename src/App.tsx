import "./styles/App.css";
import SettingsBar from "./components/SettingsBar";
import { SingleMonthView } from "./components/SingleMonthView";
import { createYearMatrix, shapeYearMatrix } from "../../grafik-src/utils";
import { createContext, useEffect, useState } from "react";
import mainArrayChanges from "./contexts/MainArrayChangeContext";
import { UserNotLoggedIn } from "./components/UserNotLoggedIn";
import UserLoggedContext from "./contexts/UserLoggedContext";

function App() {
    // on first login grab and create new matrix
    let data = createYearMatrix(2023);
    let matrix = shapeYearMatrix(data, 2023);
    const [isUserLoggedIn, setUserLoggedIn] = useState(true);
    const [allYearsArray, setAllYearsArray] = useState<any[]>();
    const [currentMonth, setCurrentMonth] = useState(0);
    const [isAC, setIAC] = useState(false);

    // and usernames, instead of ID using context

    const debugFetch = () => {
        fetch("http://localhost:2345/fetchMatrix", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    useEffect(() => {
        let date = new Date();
        setCurrentMonth(date.getMonth());
    }, []);

    useEffect(() => {
        fetchMatrix();
        console.log("Array updated");
        console.log(allYearsArray);
    }, [isAC]);

    //grab matrix from server

    const fetchMatrix = () => {
        fetch("http://localhost:2345/fetchMatrix", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setAllYearsArray(data));
    };

    //// GOWNO FETCH -> doesnt work xDDDD
    const sendtoBackend = () => {
        fetch("http://localhost:2345/modifyArray", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ test: "apple" }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    // END OF GOWNO

    // fix selection of year
    return (
        <>
            <div>
                {isUserLoggedIn ? (
                    <mainArrayChanges.Provider value={[isAC, setIAC]}>
                        <UserLoggedContext.Provider value={setUserLoggedIn}>
                            <button
                                onClick={() => {
                                    debugFetch();
                                }}
                            >
                                DEBUG
                            </button>
                            <SettingsBar
                                currentMonth={currentMonth}
                                props={setCurrentMonth}
                            ></SettingsBar>
                            {allYearsArray == undefined ? (
                                <p>Loading</p>
                            ) : (
                                <SingleMonthView
                                    array={allYearsArray[0]}
                                    currentDisplay={currentMonth}
                                ></SingleMonthView>
                            )}
                        </UserLoggedContext.Provider>
                    </mainArrayChanges.Provider>
                ) : (
                    <UserNotLoggedIn></UserNotLoggedIn>
                )}
            </div>
        </>
    );
}

export default App;
