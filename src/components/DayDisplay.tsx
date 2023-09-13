import { NotesElement } from "./NotesElement";
import { mainRoute } from "../App";
import routes from "../../../grefik-backend/src/routes";
import { useContext } from "react";
import mainArrayChanges from "../contexts/MainArrayChangeContext";
import UserNickContext from "../contexts/UserNickContext";
export function DayDisplay(props: any) {
    const [changeA, setChangeA] = useContext(mainArrayChanges);
    const nicks = useContext(UserNickContext);
    const removeSingleProposedShift = (userId: any, date: any) => {
        console.log(userId, date);
        fetch(`${mainRoute}${routes.removeProposedShifts}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: userId, days: [date] }),
        }).then(() => setChangeA(!changeA));
    };

    const removeSingleOff = (userId: any, date: any) => {
        console.log(userId, date);
        fetch(`${mainRoute}${routes.removeOffs}`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: userId, days: [date] }),
        }).then(() => setChangeA(!changeA));

        // refresh main array
    };
    return (
        <>
            <div className="day" id={`${props.w.yearId}-${props.w.yearNum}`}>
                {props.w.dayNum}
                {/* <button onClick={ () => {console.log(props.w)}}>Debug</button> */}
                <NotesElement
                    parentId={[
                        props.w.yearId,
                        props.w.yearNum,
                        props.w.monthId,
                        props.w.dayNum,
                        props.w.note,
                    ]}
                ></NotesElement>
                <button> + </button>
                <button> - </button>
                <div>
                    <p>Actual Shifts</p>
                    {props.w.actualShifts !== undefined ? (
                        <div>
                            {props.w.actualShifts.map((item: any) => (
                                <p>{item.user}</p>
                            ))}
                        </div>
                    ) : (
                        <p></p>
                    )}
                </div>
                <div>
                    <p>Proposed Shifts</p>
                    {props.w.proposedShifts !== undefined ? (
                        <div>
                            {props.w.proposedShifts.map((item: any) => (
                                <span className="smallRow">
                                    <p>{item.user}</p>
                                    <button
                                        className="smallRemoveButton"
                                        onClick={() =>
                                            removeSingleProposedShift(
                                                item.user,
                                                `${props.w.yearId}-${props.w.monthId}-${props.w.dayNum}`
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p></p>
                    )}
                </div>
                <div>
                    <p>Offs</p>
                    {props.w.offs !== undefined ? (
                        <div>
                            {props.w.offs.map((item: any) => (
                                <span className="smallRow">
                                    <p>{nicks[item.user]}</p>
                                    <button
                                        className="smallRemoveButton"
                                        onClick={() =>
                                            removeSingleOff(
                                                item.user,
                                                `${props.w.yearId}-${props.w.monthId}-${props.w.dayNum}`
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </>
    );
}
