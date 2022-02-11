import React from "react";
function Todo() {
    return (

<div>
        <ul className="list-group">
            <li className="list-group-item"><input className="form-check-input me-1" id="facebook" type="checkbox" />{6+18} <label >Facebook</label></li>
            <li className="list-group-item"><input className="form-check-input me-1" id="twitter" type="checkbox" />  <label >Twitter</label> </li>
            <li className="list-group-item"><input className="form-check-input me-1" id="instagrame" type="checkbox" /><label >Instagrame</label></li>
        </ul>
</div>
    );
}

export default Todo;