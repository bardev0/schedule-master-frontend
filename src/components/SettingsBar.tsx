import { TViewProps } from "../utils/types";
import { FillSettings } from "./FIllSettings";
import ViewSelector from "./ViewSelector";

export default function SettingsBar(props: TViewProps) {
    return (
        <>
            <div className="settings">
                <h1>Company Name</h1>
                <ViewSelector setM={props.props}></ViewSelector>
                <FillSettings></FillSettings>
                <button
                    onClick={() => {
                        if (props.states[0].display == "none") {
                            props.states[1]({ display: "block" });
                        } else {
                            props.states[1]({ display: "none" });
                        }
                    }}
                >
                    EDIT USERS
                </button>
                <button
                    onClick={() => {
                        if (props.mainSettings[0].display == "none") {
                            props.mainSettings[1]({ display: "block" });
                        } else {
                            props.mainSettings[1]({ display: "none" });
                        }
                    }}
                >
                    MAIN SETTINGS PLACE HOLEDER
                </button>
            </div>
        </>
    );
}
