import { useEffect, useState } from "react";
import { TUserConsumer } from "../../../grafik-backend/src/types";
import { TEditUsersView } from "../utils/types";
import { EditSingleUser } from "./EditSingleUser";

export function EditUsersView(props: TEditUsersView) {
    let [userList, setUserList] = useState([]);
    let [currentEditUserId, setCurrentEditUserId] = useState("");
    let [user, setUser] = useState(undefined);
    let [displayEditSingleUserView, setDESUV] = useState({ display: "none" });

    useEffect(() => {
        fetch("http://localhost:2345/userList")
            .then((response) => response.json())
            .then((data) => setUserList(data));
    }, []);

    useEffect(() => {
        fetchUser();
    }, [currentEditUserId]);

    const fetchUser = () => {
        fetch("http://localhost:2345/findUser", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: currentEditUserId }),
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    };

    return (
        <>
            <div>
                <h1>Manage Users</h1>
                <button onClick={() => props.state({ display: "none" })}>
                    Close
                </button>
                {
                    //**
                    // ADD USERS
                    // LIST USERS
                    // EDIT USERS
                    //
                }
                <button>Add User</button>
                <p>Example User</p>
                <p>Name / Surname / Role / Hourly / Edit</p>
                {
                    // add separate element to user for CSS trickery
                }
                {userList.map((user: TUserConsumer) => (
                    <div>
                        <span>{user.id}</span>
                        <span>{user.name}</span>
                        <span>{user.surname}</span>
                        <span>{user.role}</span>
                        <span>{user.email}</span>
                        <span>{user.hourly} </span>
                        {/* w/ button set current id to user (e.ta) */}
                        <button
                            onClick={() => {
                                setCurrentEditUserId(user.id);
                                setDESUV({ display: "block" });
                            }}
                        >
                            edit
                        </button>
                    </div>
                ))}
                {
                    // condition if user is clicked and started editing
                }
                <div style={displayEditSingleUserView}>
                    PP
                    <EditSingleUser
                        user={user}
                        state={setDESUV}
                        userState={setCurrentEditUserId}
                    ></EditSingleUser>
                </div>
            </div>
        </>
    );
}
