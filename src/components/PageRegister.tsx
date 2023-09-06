import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../../../grefik-backend/src/types";
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
            <div>
                <h1>ShiftArtist</h1>
                <div>
                    {/** musi byc bardziej zaawansowne -> email i opcja zakupu z code reedem */}
                    <label>email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div>
                    <label>Company Name</label>
                    <input
                        value={company}
                        onChange={(e) => {
                            setCompany(e.target.value);
                        }}
                    ></input>
                </div>
                <div>
                    <label>Promo Code</label>
                    <input
                        value={promoCode}
                        onChange={(e) => {
                            setPromoCode(e.target.value);
                        }}
                        type="text"
                    ></input>
                </div>

                <button onClick={() => register()}>Register</button>
                <p>{errorMsg}</p>
            </div>
        </>
    );
}
