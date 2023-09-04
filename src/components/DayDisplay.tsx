import { useState } from "react";
import { NotesElement } from "./NotesElement";

export function DayDisplay(props: any) {
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
                                <p>{item.user}</p>
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
                                <p>{item.user}</p>
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
// return (<>
// <div className="weekRow">
//                             <div
//                                 className="day"
//                                 id={`${w.yearId}-${w.yearNum}`}
//                             >
//                                 <p className="dayNum">{w.dayNum}</p>
//
//                                 {
//                                     // with every user define edit zmiany
//                                 }
//                             </div>
//                         );
//                     }
//                 })}
//             </div>
// </>)}
