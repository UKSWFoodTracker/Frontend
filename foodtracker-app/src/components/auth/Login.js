import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../common/InputField';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/home');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;
        
        return (
            <section id="login">
                <div className="container mt-5">
                    <div className="row" id="login-form">
                        <div className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Login</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <InputField
                                          name="username"
                                          placeholder="Username"
                                          type="text"
                                          value={this.state.username}
                                          onChange={this.onChange}
                                          error={errors.username}
                                        />
                                        <InputField
                                          name="password"
                                          placeholder="Password"
                                          type="password"
                                          value={this.state.password}
                                          onChange={this.onChange}
                                          error={errors.password}
                                        />
                                        <input type="submit" value="Submit" className="btn btn-primary btn-block btn-lg" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  

export default connect(mapStateToProps, { loginUser })(Login);