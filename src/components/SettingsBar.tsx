import { EditUsers } from "./EditUsers";
import { FillSettings } from "./FIllSettings";
import { MainSettings } from "./MainSettings";
import ViewSelector from "./ViewSelector";

export default function SettingsBar(props: any) {
    return (
        <>
            <div className="settings">
                <h1>Hello World</h1>
                <ViewSelector setM={props.props}></ViewSelector>
                <FillSettings></FillSettings>
                <EditUsers></EditUsers>
                <MainSettings></MainSettings>
            </div>
        </>
    );
}
