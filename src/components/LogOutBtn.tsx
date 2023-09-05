import { useContext } from "react";
import UserLoggedContext from "../contexts/UserLoggedContext";
export function LogOutBtn() {
    let tempUserId = "YIeMHuHpY583Xfg";
    const removeUserfromDb = (userId: string) => {
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
                onClick={() => {
                    setUserLogged(false);
                    removeUserfromDb(tempUserId);
                }}
            >
                LOG OUT
            </button>
        </>
    );
}
