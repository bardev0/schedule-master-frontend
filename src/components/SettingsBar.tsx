import { TViewProps } from "../utils/types";
import { FillSettings } from "./FIllSettings";
import { MainSettingsView } from "./MainSettingsView";
import ViewSelector from "./ViewSelector";

export default function SettingsBar(props: TViewProps) {
    console.log(props.states[0]);
    return (
        <>
            <div className="settings">
                <h1>Hello World</h1>
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
