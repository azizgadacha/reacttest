import React from "react";
import Todoitem from "./Todoitem";
function Todo() {
    return (

<div>
        <ul className="list-group">
          <Todoitem   name="facebook" id="FB"/>
            <Todoitem   name="intagramme" id="in"/>
            <Todoitem   name="Linkdin" id="Ln"/>

        </ul>
</div>
    );
}

export default Todo;