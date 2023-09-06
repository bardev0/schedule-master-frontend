import { useState } from "react";
import "../styles/App.css";
import { TLoginCredentials } from "../../../grefik-backend/src/types";
import { useNavigate } from "react-router-dom";
export function PageLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const login = (response: any) => {
        console.log(response);
        if (response.status == "succes") {
            localStorage.setItem("id", response.id);
            navigate("/app");
        } else {
            setErrorMsg(response.status);
        }
    };
    const validateLogin = () => {
        let user: TLoginCredentials = {
            email: username,
            password: password,
        };

        fetch("http://localhost:2345/validateMainUser", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((d) => login(d));
    };
    return (
        <>
            <div className="loginPage">
                <h1>ShiftArtist</h1>
                <h3>Login</h3>
                <div>
                    <label>email</label>
                    <input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        type="text"
                    ></input>
                </div>
                <div>
                    <label>password</label>
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="text"
                    ></input>
                </div>
                <label>Keep me loged in</label>
                <input type="checkbox"></input>
                <button
                    onClick={() => {
                        validateLogin();
                    }}
                >
                    Login
                </button>
                <p>{errorMsg}</p>
            </div>
        </>
    );
}
