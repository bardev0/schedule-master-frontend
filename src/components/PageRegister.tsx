import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../../../grefik-backend/src/types";
import { MainHeader } from "./MainHeader";
import { Title } from "./Title";
export function PageRegister() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const validateRegister = (d: any) => {
        if (d.registerStatus == "succes") {
            navigate("/registerComplete");
        } else {
            setErrorMsg(d.registerStatus);
        }
    };

    const register = () => {
        let registerData: TRegisterData = {
            email: email,
            password: password,
            promoCode: promoCode,
            companyName: company,
        };

        fetch("http://localhost:2345/addMainUser", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(registerData),
            headers: { "Content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((d) => validateRegister(d));
    };
    return (
        <>
            <MainHeader></MainHeader>
            <Title></Title>
            <div className="underTitleContiner">
                <h3>Regiser</h3>
                <table>
                    <tr>
                        <td>
                            <label>email</label>
                        </td>
                        <td>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                type="text"
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Company Name</label>
                        </td>
                        <td>
                            <input
                                value={company}
                                onChange={(e) => {
                                    setCompany(e.target.value);
                                }}
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Promo Code</label>
                        </td>
                        <td>
                            <input
                                value={promoCode}
                                onChange={(e) => {
                                    setPromoCode(e.target.value);
                                }}
                                type="text"
                            ></input>
                        </td>
                    </tr>
                </table>
                <button className="LPbtn" onClick={() => register()}>
                    Register
                </button>
                <p>{errorMsg}</p>
            </div>
        </>
    );
}
