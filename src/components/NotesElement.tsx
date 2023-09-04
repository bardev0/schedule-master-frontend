import { useState, useContext, useEffect } from "react";
import { TNotesObj } from "../utils/types";
import mainArrayChanges from "../contexts/MainArrayChangeContext";
export function NotesElement(props: any) {
    const [notesValue, setNotesValue] = useState(props.parentId[4]);
    const [isEditNoteVisible, setEditNoteVisible] = useState(false);
    const [changeA, setChangeA] = useContext(mainArrayChanges);

    const changeEditView = () => {
        sendNotesValue();
        setEditNoteVisible(!isEditNoteVisible);
        setChangeA(!changeA);
    };

    const sendNotesValue = () => {
        let noteObj: TNotesObj = {
            date: new Date(
                `${props.parentId[0]}-${props.parentId[2]}-${props.parentId[3]}`
            ),
            dayNum: props.parentId[3],
            note: notesValue,
        };
        console.log(noteObj);
        fetch("http://localhost:2345/addNotes", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(noteObj),
        })
            .then((r) => r.json())
            .then((d) => console.log(d));
    };

    useEffect(() => {
        if (props.parentId[4] == undefined) {
            setNotesValue("");
        } else {
            setNotesValue(props.parentId[4]);
        }
    }, []);

    const resetNote = () => {
        setNotesValue("");
        sendNotesValue();
        setEditNoteVisible(!isEditNoteVisible);
        setChangeA(!changeA);
    };
    const notesChanged = () => {};
    return (
        <>
            <div className="NotesElement">
                {
                    // when render grab value from props but unitl save grab value from
                }
                <i>{notesValue}</i>
                {/* <b>{props.parentId}</b> */}
                {isEditNoteVisible ? (
                    <div>
                        <input
                            value={notesValue}
                            onKeyDownCapture={(e) => {
                                e.key == "Enter" ? changeEditView() : null;
                            }}
                            onChange={(e) => {
                                setNotesValue(e.target.value);
                            }}
                            placeholder="add notes..."
                        ></input>
                        <button onClick={() => changeEditView()}>Save</button>
                        <button onClick={() => resetNote()}>Delete</button>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            changeEditView();
                        }}
                    >
                        {notesValue == "" ? "+" : "Edit"}
                    </button>
                )}
            </div>
        </>
    );
}
