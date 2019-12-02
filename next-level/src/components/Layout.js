import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import {isEmpty} from "lodash";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class Layout extends Component {
    handleRoute = (role) => {
        console.log("handleroute", this.props);
        if (role === 'admin' && this.props.isLogin) {
            this.props.history.push('/admin')
        } else if (role === 'user' && this.props.isLogin) {
            this.props.history.push('/user')
        }
    }
    handleSubmit = async (userDetail = {}) => {
        console.log("userDetail", userDetail);
        if (!isEmpty(userDetail)) {
            console.log("inside login");
            this.props.getUserDetail(userDetail, this.handleRoute);
            
        } else {
            console.log("login not successful");
        }
    }
    render() {
        console.log("layout props", this.props);
        return (
            <div className="Layout">
                <Header />
                <Login login={this.handleSubmit} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetoprops", {...state});
    return {
        userDetail: state.userDetail,
        isLogin: state.isLogin,
    }
}
const mapDispachToProps = (dispach) => {
    return {
        getUserDetail : async ( userDetail, callback) => {
        console.log("ravi testing", userDetail, callback);
        await dispach({ type: "login", payload: {userDetail, callback }})
        if (callback) {
            callback();
        }
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Layout);
