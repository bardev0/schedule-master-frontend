import { useEffect, useState, useContext } from "react";
import { TUserConsumer } from "../../../grefik-backend/src/types";
import { TEditUsersView } from "../utils/types";
import { EditSingleUser } from "./EditSingleUser";
import { AddUser } from "./AddUser";

import { mainRoute } from "../App";
import routes from "../../../grefik-backend/src/routes";
import mainUserContext from "../contexts/MainUserContext";
export function EditUsersView(props: TEditUsersView) {
    let [userList, setUserList] = useState([]);
    let [currentEditUserId, setCurrentEditUserId] = useState("");
    let [displayAddUser, setDAD] = useState(true);
    let [displayEdit, setDE] = useState(false);
    let [userChange, setUserChange] = useState(false);

    const mainUserData = useContext(mainUserContext);
    const [user, setUser] = useState(null);

    const prepUserToRemove = (id: any) => {
        setCurrentEditUserId(id);
    };
    const removeUser = () => {
        console.log("c");
        console.log(currentEditUserId);
        fetch(`${mainRoute}${routes.removeSubUser}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subUserId: currentEditUserId }),
        })
            .then((r) => r.json())
            .then((d) => console.log(d));
        setUserChange(!userChange);
    };

    useEffect(() => {
        fetch(`${mainRoute}${routes.subUsersList}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ parentId: mainUserData.id }),
        })
            .then((response) => response.json())
            .then((data) => setUserList(data));
    }, [userChange]);

    useEffect(() => {
        setUser(null);
        fetch(`${mainRoute}${routes.findSingleSubUser}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subUserId: currentEditUserId }),
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [currentEditUserId]);
    return (
        <>
            <div className="editUsersView subSetting">
                <div className="subSettingHeader">
                    <h2>Manage Users</h2>
                    <button onClick={() => props.state[1](!props.state[0])}>
                        Close
                    </button>
                </div>

                <br></br>
                <button onClick={() => setDAD(!displayAddUser)}>
                    Add User
                </button>
                {
                    // add separate element to user for CSS trickery
                }
                <table>
                    <th>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Nick</td>
                        <td>Role</td>
                        <td>Email</td>
                        <td>Hourly</td>
                    </th>
                    <tbody>
                        {userList.map((user: TUserConsumer) => (
                            <tr className="userList">
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.nick}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>{user.hourly} </td>
                                {/* w/ button set current id to user (e.ta) */}
                                <td>
                                    <button
                                        onClick={() => {
                                            setCurrentEditUserId(user.id);
                                            setUserChange(!userChange);
                                            // add that edit closes as well maybe?
                                        }}
                                    >
                                        edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            prepUserToRemove(user.id);
                                            removeUser();
                                        }}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
            </div>
        </>
    );
}
