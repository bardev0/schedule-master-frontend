import { useState } from "react";
import "../styles/App.css";
import { TLoginCredentials } from "../../../grefik-backend/src/types";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "./MainHeader";
import { Title } from "./Title";
import * as z from "zod";

const emailSchema = z.string().email();

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
    const validateLogin = async () => {
        setErrorMsg("");
        let validEmail = emailSchema.safeParse(username);

        console.log(validEmail);
        if (validEmail.success) {
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
        } else {
            setErrorMsg("Enter valid email");
        }
    };
    return (
        <>
            <MainHeader></MainHeader>
            <Title></Title>
            <div className="underTitleContiner">
                <h3>Login</h3>
                <table>
                    <tr>
                        <td>
                            <label>email</label>
                        </td>
                        <td>
                            <input
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                type="text"
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>password</label>
                        </td>
                        <td>
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                            ></input>
                        </td>
                    </tr>
                </table>
                <div className="CheckBox">
                    <label>Keep me loged in</label>
                    <input type="checkbox"></input>
                </div>
                <button
                    className="LPbtn"
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
