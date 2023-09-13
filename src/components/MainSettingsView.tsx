// Account Info, Payments, etc
export function MainSettingsView(props: any) {
    return (
        <>
            <div className="mainSettingsView subSetting">
                <h1>Main Settings Placeholder</h1>
                <button onClick={() => props.state[1](!props.state[0])}>
                    Close
                </button>
            </div>
        </>
    );
}
