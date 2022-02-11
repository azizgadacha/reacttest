import React from "react";
function Todoitem(props) {
    return (

        <li className="list-group-item"><input className="form-check-input me-1" id={props.id} type="checkbox" /><label >{props.name}</label></li>
    );
}

export default Todoitem;