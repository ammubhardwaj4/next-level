import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

let userData = [];
class Profile extends Component{
    componentDidMount() {
        userData = [{...JSON.parse(localStorage.getItem("userDetail"))}];
    }
    render() {
        return (
            !this.props.location.state || this.props.location.state.from === "profile" ? (
                <div className="user-view__content">
                    <div className="user-view__form-container">
                        <h2 className="heading-secondary ma-bt-md">Your Profile View</h2>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>First Name:</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((item, index) => {
                                        return (
                                            <tr key={`profile-${index}`}>
                                                <td>{item.fname}</td>
                                                <td>{item.lname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.role}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>) : (<h1>User data</h1>)
        )
    }
}

export default withRouter(Profile);