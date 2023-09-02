// Account Info, Payments, etc
export function MainSettingsView(props: any) {
    console.log(props.state);
    return (
        <>
            <div className="mainSettingsView">
                <h1>Main Settings Placeholder</h1>
                <button onClick={() => props.state[1](!props.state[0])}>
                    Close
                </button>
            </div>
        </>
    );
}
