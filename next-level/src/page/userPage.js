import React from "react";
import { withRouter } from "react-router-dom";

const userPage = () => {
    return (
        <div className="adminPage">
            <h1>Welcome to user page</h1>
        </div>
    )
}

export default withRouter(userPage);