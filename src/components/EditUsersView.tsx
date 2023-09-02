import { useEffect, useState } from "react";
import { TUserConsumer } from "../../../grafik-backend/src/types";
import { TEditUsersView } from "../utils/types";
import { EditSingleUser } from "./EditSingleUser";
import { AddUser } from "./AddUser";

export function EditUsersView(props: TEditUsersView) {
    let [userList, setUserList] = useState([]);
    let [currentEditUserId, setCurrentEditUserId] = useState("");
    let [displayAddUser, setDAD] = useState(true);
    let [displayEdit, setDE] = useState(false);
    let [userChange, setUserChange] = useState(false);

    const [user, setUser] = useState(null);

    const prepUserToRemove = (id: any) => {
        setCurrentEditUserId(id);
    };
    const removeUser = () => {
        console.log("c");
        console.log(currentEditUserId);
        fetch("http://localhost:2345/removeUser", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: currentEditUserId }),
        })
            .then((r) => r.json())
            .then((d) => console.log(d));
        setUserChange(!userChange);
    };
    const fetchData = () => {
        fetch("http://localhost:2345/findUser", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                userId: currentEditUserId,
            }),
            headers: { "Content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((d) => setUser(d));
    };

    useEffect(() => {
        fetch("http://localhost:2345/userList")
            .then((response) => response.json())
            .then((data) => setUserList(data));
    }, [userChange]);

    useEffect(() => {
        setUser(null);
        fetch("http://localhost:2345/findUser", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: currentEditUserId }),
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [currentEditUserId]);
    return (
        <>
            <div className="editUsersView">
                <h1>Manage Users</h1>
                <button onClick={() => props.state[1](!props.state[0])}>
                    Close
                </button>
                <br></br>
                <button onClick={() => setDAD(!displayAddUser)}>
                    Add User
                </button>
                <p>Name / Surname / Role / Hourly / Edit</p>
                {
                    // add separate element to user for CSS trickery
                }
                {userList.map((user: TUserConsumer, idx) => (
                    <div className="userList">
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.surname}</div>
                        <div>{user.role}</div>
                        <div>{user.email}</div>
                        <div>{user.hourly} </div>
                        {/* w/ button set current id to user (e.ta) */}
                        <button
                            onClick={() => {
                                setCurrentEditUserId(user.id);
                                setUserChange(!userChange);
                                // add that edit closes as well maybe?
                            }}
                        >
                            edit
                        </button>
                        <button
                            onClick={() => {
                                prepUserToRemove(user.id);
                                removeUser();
                            }}
                        >
                            delete
                        </button>
                    </div>
                ))}
            </div>

            {displayEdit ? (
                <p> </p>
            ) : user == undefined ? (
                <p> </p>
            ) : (
                <EditSingleUser
                    close={setUser}
                    update={[userChange, setUserChange]}
                    user={user}
                ></EditSingleUser>
            )}
            {displayAddUser ? (
                <p> </p>
            ) : (
                <AddUser
                    close={[displayAddUser, setDAD]}
                    update={[userChange, setUserChange]}
                ></AddUser>
            )}
        </>
    );
}
