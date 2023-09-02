import { useState } from "react";
import { TViewProps } from "../utils/types";
import { AddOff } from "./AddOff";
import ViewSelector from "./ViewSelector";
import { EditUsersView } from "./EditUsersView";
import { MainSettingsView } from "./MainSettingsView";
export default function SettingsBar(props: TViewProps) {
    // select only one active view
    let viewsArray = [];
    let [vAddOff, setVaddOff] = useState(true);
    let [vEditUsers, setVEditUsers] = useState(true);
    let [vMainSettings, setVMainSettings] = useState(true);
    /// move this CSS shit to tenary operors
    return (
        <>
            <div className="settings">
                <h1>Company Name</h1>
                <ViewSelector
                    cm={props.currentMonth}
                    setM={props.props}
                ></ViewSelector>
                <button>PRopose Scheadu</button>
                <button
                    onClick={() => {
                        setVaddOff(!vAddOff);
                    }}
                >
                    Add Off
                </button>
                <button
                    onClick={() => {
                        setVEditUsers(!vEditUsers);
                    }}
                >
                    EDIT USERS
                </button>
                <button
                    onClick={() => {
                        setVMainSettings(!vEditUsers);
                    }}
                >
                    MAIN SETTINGS
                </button>
                {vAddOff ? <></> : <AddOff></AddOff>}
                {vEditUsers ? (
                    <></>
                ) : (
                    <EditUsersView
                        state={[vEditUsers, setVEditUsers]}
                    ></EditUsersView>
                )}
                {vMainSettings ? (
                    <></>
                ) : (
                    <MainSettingsView
                        state={[vMainSettings, setVMainSettings]}
                    ></MainSettingsView>
                )}
            </div>
        </>
    );
}
