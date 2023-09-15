// Account Info, Payments, etc
export function MainSettingsView(props: any) {
    return (
        <>
            <div className="mainSettingsView subSetting">
                <div className="subSettingHeader">
                    <h2>Main Settings Placeholder</h2>
                    <button onClick={() => props.state[1](!props.state[0])}>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
