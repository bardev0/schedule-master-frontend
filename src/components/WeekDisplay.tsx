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
                        return (
                            <div className="day">
                                <p className="dayNum">{w.dayNum}</p>
                                <p>Maniek</p>
                                <p>Kuba</p>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}
