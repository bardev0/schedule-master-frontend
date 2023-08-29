export function WeekDisplay(props: any) {
    // console.log(props.props);
    return (
        <>
            <div className="week">
                {props.props.map((w: TDay) => {
                    if (w == undefined) {
                        return <span></span>;
                    } else {
                        return <p>{w.dayNum}</p>;
                    }
                })}
            </div>
        </>
    );
}
