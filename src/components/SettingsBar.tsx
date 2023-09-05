import { useState } from "react";
import { TViewProps } from "../utils/types";
import { AddOff } from "./AddOff";
import ViewSelector from "./ViewSelector";
import { EditUsersView } from "./EditUsersView";
import { MainSettingsView } from "./MainSettingsView";
import { AddPShift } from "./AddPShift";
import { ScheaduleView } from "./ScheaduleView";
import { LogOutBtn } from "./LogOutBtn";

export default function SettingsBar(props: TViewProps) {
    // select only one active view
    let viewsArray = [];
    let [vAddOff, setVaddOff] = useState(true);
    let [vEditUsers, setVEditUsers] = useState(true);
    let [vMainSettings, setVMainSettings] = useState(true);
    let [vAddPShift, setVAddPShift] = useState(true);
    let [vScheaduleLIST, setVScheaduleLIST] = useState(true);

    let logOutCurrentUser = () => {
        fetch;
    };
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
                        setVScheaduleLIST(!vScheaduleLIST);
                    }}
                >
                    LISTA GRAFIKOW
                </button>
                <button
                    onClick={() => {
                        setVAddPShift(!vAddPShift);
                    }}
                >
                    Add P Shift
                </button>
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
                {vAddPShift ? (
                    <></>
                ) : (
                    <AddPShift state={[vAddPShift, setVAddPShift]}></AddPShift>
                )}
                {vAddOff ? (
                    <></>
                ) : (
                    <AddOff state={[vAddOff, setVaddOff]}></AddOff>
                )}
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
                {vScheaduleLIST ? (
                    <></>
                ) : (
                    <ScheaduleView
                        state={[vScheaduleLIST, setVScheaduleLIST]}
                    ></ScheaduleView>
                )}
                <LogOutBtn></LogOutBtn>
            </div>
        </>
    );
}
