import { TMonthYearSelectorProps } from "../utils/types";

export default function MonthYearSelector(props: TMonthYearSelectorProps) {
    console.log(props);
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

    const yearsAhead = [2023, 2024, 2025, 2026];
    // do that curent month is selected first
    return (
        <>
            <div>
                <div>Select Month / Year</div>
                <select
                    onChange={(e) => {
                        props.month.set(e.target.value);
                    }}
                >
                    {monthsUTC.map((item, idx) => (
                        <option
                            selected={props.month.value == idx ? true : false}
                            value={idx}
                        >
                            {item}
                        </option>
                    ))}
                </select>
                <select
                    onChange={(e) => {
                        props.year.set(e.target.value);
                    }}
                >
                    {yearsAhead.map((item, idx) => (
                        <option
                            selected={props.year.value == yearsAhead[idx]}
                            value={yearsAhead[idx]}
                        >
                            {yearsAhead[idx]}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
