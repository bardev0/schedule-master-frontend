import { ViewSelector } from "../App";
export default function SettingsBar(props: any) {
    let props1 = props
    return (
        <>
            <div className="settings">
                <h1>Hello World</h1>
                <ViewSelector setM={props.props}></ViewSelector>
            </div>
        </>
    );
}
