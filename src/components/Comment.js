import React from "react";

function Comment({ user, text }) {
    return (
        <div>
            <h3>{user}</h3>
            <div>{text}</div>
        </div>
    )
}

export default Comment