import { TDay } from "../../../grafik-src/types";
export function WeekDisplay(props: any) {
    // console.log(props.props);
    return (
        <>
            <div className="weekRow">
                {props.props.map((w: TDay) => {
                    if (w == undefined) {
                        return <span></span>;
                    } else {
                        // split this into components
                        return (
                            <div
                                className="day"
                                id={`${w.yearId}-${w.yearNum}`}
                            >
                                <p className="dayNum">{w.dayNum}</p>
                                <button>edit note</button>
                                {
                                    // with every user define edit zmiany
                                }
                                <button> + </button>
                                <button> - </button>
                                <div>
                                    <p>Actual Shifts</p>
                                    {w.actualShifts !== undefined ? (
                                        <div>
                                            {w.actualShifts.map(
                                                (item: any) => (
                                                    <p>{item.user}</p>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <p></p>
                                    )}

                                </div>
                                <div>
                                    <p>Proposed Shifts</p>
                                    {w.proposedShifts !== undefined ? (
                                        <div>
                                            {w.proposedShifts.map(
                                                (item: any) => (
                                                    <p>{item.user}</p>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <p></p>
                                    )}
                                </div>
                                <div>
                                    <p>Offs</p>
                                    {w.offs !== undefined ? (
                                        <div>
                                            {w.offs.map((item: any) => (
                                                <p>{item.user}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p></p>
                                    )}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}
