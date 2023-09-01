import { useEffect } from "react";
import { TEditSingleUserView } from "../utils/types";

export function EditSingleUser(props: TEditSingleUserView) {
    console.log(props);
    if (props.user !== undefined) {
        return (
            <>
                <div>Window for Editing single User</div>
                <button
                    onClick={() => {
                        props.state({ display: "none" });
                        props.userState("");
                        console.log("c");
                    }}
                >
                    Close
                </button>
                 { Object.entries(props.user).map((item, i) => <div><span>{item[0]}</span><span>{item[1]}</span></div>)}   
                <p>{props.user.email}</p>
            </>
        );
    }
    // fetch user
    // send data to db
    // close window
}
