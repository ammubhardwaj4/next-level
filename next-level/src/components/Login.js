import React, { Component } from "react";
import { showAlert } from '../alerts';
import '../css/style.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        role: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login({...this.state});
        // event.preventDefault();
        // const target = event.target;
        // let formValue = {};
        // for (var i = 0; i < target.elements.length - 3; i++) {
        //     let id = target.elements[i].id,
        //         value = target.elements[i].value;
        //     formValue[id] = value;
        // }
        // console.log(target.elements);
        // console.log(target.elements.length);
        
    }

    handleChange = (e, fieldName = '') => {
        console.log("testing",e,fieldName)
        this.setState({ [`${fieldName}`] : e.target.value }, () => console.log(this.state[`${fieldName}`]))
    }
    render() {
        return (
            <div className="login-app">
              <main className="main">
                <div className="login-form">
                    <h2 className="heading-secondary ma-bt-lg"> Log into your account</h2>
                    <form onSubmit={this.handleSubmit} className="form form--login">
                        <div className="form__group">
                            <label className="form__label" htmlFor="email">Email address</label> 
                                <input type="email" id="email" className="form__input" onChange={(e) => this.handleChange(e, 'email')} value={this.state.email} placeholder="you@example.com" required />
                        </div>
                        <div className="form__group ma-bt-md">
                            <label className="form__label" htmlFor="password"> Password</label>
                                <input type="password" id="password" className="form__input" onChange={(e) => this.handleChange(e, 'password')} value={this.state.password} placeholder="•••••" minLength="5" required/>
                        </div>
                        <div className="form__group ma-bt-md">
                            <label className="form__label" htmlFor="role"> Role-: </label>
                            <label>
                                    <input className="with-gap" name="role" type="radio" onChange={(e) => this.handleChange(e, 'role')}  value="admin" required />
                                    <span className="checkmark">Admin</span>
                            </label>
                                <label className="right">
                                    <input className="with-gap" name="role" type="radio" onChange={(e) => this.handleChange(e, 'role')}  value="user" required />
                                    <span className="checkmark">User</span>
                            </label>
                        </div>
                        <div className="form__group">
                            <button type="submit" className="button button--green center">Login</button> 
                        </div>
                    </form>
                </div>
              </main>
            </div>
        )
    }
}

export default Login;