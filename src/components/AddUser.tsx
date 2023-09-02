import { useState } from "react";
import { Roles } from "../utils/types";

//add data validation
export function AddUser(props: any) {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [role, setRole] = useState("Consumer");
    let [email, setEmail] = useState("");
    let [hourly, setHourly] = useState(0);
    let roles: Roles[] = ["Consumer", "Admin"];

    const addUserToDb = () => {
        let freshNewUser = {
            name: name,
            surname: surname,
            role: role,
            email: email,
            hourly: hourly,
        };

        fetch("http://localhost:2345/addUser", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(freshNewUser),
            headers: { "Content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((d) => console.log(d));
        console.log(freshNewUser);
        props.update[1](!props.update[0]);
        props.close[1](!props.close[0]);
    };
    return (
        <>
            <div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                </div>
                <div>
                    <label>surname</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setSurname(e.target.value);
                        }}
                    ></input>
                </div>
                <div>
                    <label>role</label>
                    <select
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                    >
                        {roles.map((item, idx) => (
                            <option key={idx} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>email</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    ></input>
                </div>
                <div>
                    <label>hourly</label>
                    <input
                        type="number"
                        onChange={(e) => {
                            setHourly(parseInt(e.target.value));
                        }}
                    ></input>
                </div>
            </div>
            <button
                onClick={() => {
                    addUserToDb();
                }}
            >
                ADD USER
            </button>
        </>
    );
}
