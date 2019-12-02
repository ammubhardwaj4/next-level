import React from "react";
import { withRouter } from "react-router-dom";

const adminPage = () => {
    return (
        <div className="adminPage">
           <h1>Welcome to admin page</h1>
        </div>
    )
}

export default withRouter(adminPage);