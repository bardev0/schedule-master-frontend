import "./styles/App.css";
import SettingsBar from "./components/SettingsBar";
import { SingleMonthView } from "./components/SingleMonthView";
import { useContext, useEffect, useState } from "react";
import mainArrayChanges from "./contexts/MainArrayChangeContext";
import { UserNotLoggedIn } from "./components/UserNotLoggedIn";
import UserLoggedContext from "./contexts/UserLoggedContext";
import mainUserContext from "./contexts/MainUserContext";
import routes from "../../grefik-backend/src/routes";
import UserNickContext from "./contexts/UserNickContext";

export const mainRoute = "http://localhost:2345";

function AppWrapper() {
    const [mainUserData, setMainUserData] = useState<any>();
    const fetchUser = () => {
        fetch(`${mainRoute}${routes.findMainUser}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: localStorage.getItem("id") }),
        })
            .then((response) => response.json())
            .then((data) => {
                setMainUserData(data);
            });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    console.log(mainUserData);
    return (
        <>
            <div>
                {mainUserData == undefined ? (
                    <p>nie ma</p>
                ) : (
                    <mainUserContext.Provider value={mainUserData}>
                        <App userData={mainUserData}></App>
                    </mainUserContext.Provider>
                )}
            </div>
        </>
    );
}

function App(props: any) {
    const [isUserLoggedIn, setUserLoggedIn] = useState(true);
    const [allYearsArray, setAllYearsArray] = useState<any[]>();
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(0);
    const [isAC, setIAC] = useState(false);
    const [nicksList, setNickLists] = useState<any>({});

    const userNicks = useContext(UserNickContext);

    const fetchNicksObj = () => {
        fetch(`${mainRoute}${routes.subUsersList}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ parentId: localStorage.getItem("id") }),
        })
            .then((response) => response.json())
            .then((d) => {
                d.map((obj: any) => {
                    let temp = { ...nicksList };
                    temp[obj.id] = obj.nick;
                    setNickLists(temp);
                });
            });
    };

    const fetchMatrix = () => {
        fetch("http://localhost:2345/fetchMatrix", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: localStorage.getItem("id") }),
        })
            .then((response) => response.json())
            .then((data) => setAllYearsArray(data.data));
    };

    // DEBUG
    const debugFetch = () => {
        fetch("http://localhost:2345/fetchMatrix", {
            method: "POST",
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
        setCurrentYear(date.getFullYear());
        fetchNicksObj();
    }, []);

    useEffect(() => {
        fetchMatrix();
        // console.log("Array updated");
        // console.log(allYearsArray);
    }, [isAC]);

    return (
        <>
            {/* <div>
                <h1>Test</h1>
                <button onClick={ () => {console.log(allYearsArray)}}> MORE DEBUG </button>
            </div> */}

            <div>
                {isUserLoggedIn ? (
                    <mainArrayChanges.Provider value={[isAC, setIAC]}>
                        <UserLoggedContext.Provider value={setUserLoggedIn}>
                            <UserNickContext.Provider value={nicksList}>
                                <button
                                    onClick={() => {
                                        console.log(nicksList);
                                    }}
                                >
                                    DEBUG
                                </button>
                                <SettingsBar
                                    month={{
                                        value: currentMonth,
                                        set: setCurrentMonth,
                                    }}
                                    year={{
                                        value: currentYear,
                                        set: setCurrentYear,
                                    }}
                                    userData={props.userData}
                                    currentMonth={currentMonth}
                                    props={setCurrentMonth}
                                ></SettingsBar>
                                {allYearsArray == undefined ? (
                                    <p>Loading</p>
                                ) : (
                                    <SingleMonthView
                                        month={currentMonth}
                                        year={currentYear}
                                        arrayData={allYearsArray}
                                    ></SingleMonthView>
                                )}
                            </UserNickContext.Provider>
                        </UserLoggedContext.Provider>
                    </mainArrayChanges.Provider>
                ) : (
                    <UserNotLoggedIn></UserNotLoggedIn>
                )}
            </div>
        </>
    );
}

export default AppWrapper;
