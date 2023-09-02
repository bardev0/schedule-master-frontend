import { useState } from "react";

export function EditSingleComp({ item }) {
    let [editable, setEditable] = useState(true);
    let [eBtn, setEBtn] = useState("Edit");
    let [itemVal, setItemVal] = useState(item[0]);
    return (
        <>
            <div className="singleElem">
                {editable ? (
                    <div>{itemVal}</div>
                ) : (
                    <input
                        value={itemVal}
                        onChange={(e) => {
                            setItemVal(e.target.value);
                            item[1](e.target.value);
                        }}
                    ></input>
                )}

                <button
                    onClick={() => {
                        setEditable(!editable);
                        if (editable == true) {
                            setEBtn("Done");
                        } else {
                            setEBtn("Edit");
                        }
                    }}
                >
                    {eBtn}
                </button>
            </div>
        </>
    );
}
