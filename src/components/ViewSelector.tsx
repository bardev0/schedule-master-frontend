export default function ViewSelector(props: any) {
    const monthsUTC = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const monthsNUM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    // do that curent month is selected first
    return (
        <>
            <div>
                <div>Select Month</div>
                <select onChange={(e) => props.setM(e.target.value)}>
                    {monthsNUM.map((_idx, val) => (
                        <option value={val}>{monthsUTC[val]}</option>
                    ))}
                </select>

                <select>
                    <option value={2023}>2023</option>
                </select>
            </div>
        </>
    );
}
