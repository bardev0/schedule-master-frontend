import { useContext } from "react";
import UserLoggedContext from "../contexts/UserLoggedContext";
export function LogOutBtn() {
    const removeUserfromDb = (userId: string | null) => {
        fetch("http://localhost:2345/removeLoggedUser", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userId }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    const setUserLogged = useContext(UserLoggedContext);
    return (
        <>
            <button
                className="settingBtn"
                onClick={() => {
                    setUserLogged(false);
                    removeUserfromDb(localStorage.getItem("id"));
                    localStorage.clear();
                }}
            >
                LOG OUT
            </button>
        </>
    );
}
