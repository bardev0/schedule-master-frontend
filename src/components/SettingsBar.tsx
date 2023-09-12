import { useState } from "react";
import { TSettingsBarViewProps } from "../utils/types";
import { AddOff } from "./AddOff";
import MonthYearSelector from "./MonthYearSelector";
import { EditUsersView } from "./EditUsersView";
import { MainSettingsView } from "./MainSettingsView";
import { AddPShift } from "./AddPShift";
import { ScheaduleView } from "./ScheaduleView";
import { LogOutBtn } from "./LogOutBtn";

export default function SettingsBar(props: TSettingsBarViewProps) {
    // select only one active view
    let [vAddOff, setVaddOff] = useState(true);
    let [vEditUsers, setVEditUsers] = useState(true);
    let [vMainSettings, setVMainSettings] = useState(true);
    let [vAddPShift, setVAddPShift] = useState(true);
    let [vScheaduleLIST, setVScheaduleLIST] = useState(true);

    /// move this CSS shit to tenary operors
    return (
        <>
            <div className="settings">
                <div className="firstSettingsElement">

                <h1>{props.userData.companyName}</h1>
<MonthYearSelector
                    month={{ value: props.month.value, set: props.month.set }}
                    year={{ value: props.year.value, set: props.year.set }}
                ></MonthYearSelector>
                </div>
                
                <div>
                    
                    <button>Propose Schedule</button>
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
                    Add Proposed Shift
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


                    </div>

                <div className="lastSettingsElement">
                <button
                    onClick={() => {
                        setVMainSettings(!vMainSettings);
                    }}
                >
                    MAIN SETTINGS
                </button>
                <LogOutBtn></LogOutBtn>
                    
                    </div>   

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
            </div>
        </>
    );
}
