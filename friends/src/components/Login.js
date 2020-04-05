import React from 'react';
import '../App.css';

import { axiosWithAuth } from '../utils/axiosWithAuth';



class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    
    
    login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);

                this.props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="login-box">
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange }
                        placeholder="Enter Username"
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                    />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;