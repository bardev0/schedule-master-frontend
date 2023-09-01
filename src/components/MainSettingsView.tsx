// Account Info, Payments, etc
export function MainSettingsView(props: any) {
    return (
        <>
            <div>Main Settings Placeholder</div>
            <button onClick={() => props.state({ display: "none" })}>
                Close
            </button>
        </>
    );
}
