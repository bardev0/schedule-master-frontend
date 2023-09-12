import { useEffect, useState } from "react";
import { EditSingleComp } from "./EditSingleComp";
// item means key and value in array

// when clicking last use user it doesnt work
export function EditSingleUser(props: any) {
    if (props.user !== undefined) {
        let [user, setUser] = useState({});
        let [name, setName] = useState(null);
        let [surname, setSurname] = useState(null);
        let [role, setRole] = useState(null);
        let [email, setEmail] = useState(null);
        let [hourly, setHourly] = useState(null);

        useEffect(() => {
            setUser(props.user);
            setName(props.user.name);
            setSurname(props.user.surname);
            setRole(props.user.role);
            setEmail(props.user.email);
            setHourly(props.user.hourly);
        }, []);

        let saveUser = () => {
            let newUser: any = {
                id: props.user.id,
                name: name,
                surname: surname,
                role: role,
                email: email,
                hourly: hourly,
            };
            console.log(newUser);
            fetch("http://localhost:2345/modifyUser", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(newUser),
                headers: { "Content-type": "application/json" },
            })
                .then((response) => response.json())
                .then((d) => console.log(d));
            props.update[1](!props.update[0]);
            props.close(null);
        };
        return (
            <>
                <div>
                    <button
                        onClick={() => {
                            props.close(null);
                        }}
                    >
                        Close
                    </button>
                    <div className="oneLine">
                        <span>Id</span>
                        <span>{props.user.id}</span>
                    </div>
                    <div className="oneLine">
                        <label>name</label>
                        <EditSingleComp
                            item={[props.user.name, setName]}
                        ></EditSingleComp>
                    </div>
                    <div className="oneLine">
                        <label>surname</label>
                        <EditSingleComp
                            item={[props.user.surname, setSurname]}
                        ></EditSingleComp>
                    </div>
                    <div className="oneLine">
                        <label>role</label>
                        <EditSingleComp
                            item={[props.user.role, setRole]}
                        ></EditSingleComp>
                    </div>
                    <div className="oneLine">
                        <label>email</label>
                        <EditSingleComp
                            item={[props.user.email, setEmail]}
                        ></EditSingleComp>
                    </div>
                    <div className="oneLine">
                        <label>hourly</label>
                        <EditSingleComp
                            item={[props.user.hourly, setHourly]}
                        ></EditSingleComp>
                    </div>

                    <button
                        onClick={() => {
                            saveUser();
                        }}
                    >
                        SAVE USER
                    </button>
                </div>
            </>
        );
    } else {
        return <>ERROR</>;
    }
}
