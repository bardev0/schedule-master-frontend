import { useEffect, useState } from "react";

export function EditSingleUser(props: any) {
    return (<>
    <div><label>id</label>{props.user.id}</div>
    <div><label>name </label>{props.user.name} <button>Edit</button></div>
    <div>{props.user.surname}</div>
    <div>{props.user.email}</div>
    <div>{props.user.role}</div>
    <div>{props.user.hourly}</div>
    </>) 
}
