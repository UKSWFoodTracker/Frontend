import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../common/InputField';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			password2: '',
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
				if (nextProps.errors) {
						this.setState({ errors: nextProps.errors })
				}
		}

		onChange(e){
				this.setState({ [e.target.name]: e.target.value });
		}

		onSubmit(e) {
				e.preventDefault();

				const userData = {
						email: this.state.email,
						name: this.state.username,
						password: this.state.password,
				};

				if(this.state.password === this.state.password2)
					this.props.registerUser(userData, this.props.history);
		}

    render() {
            const { errors } = this.state;

            return (
                    <section id="register">
                            <div className="container mt-5">
                                    <div className="row" id="register-form">
                                            <div className="col-md-6 mx-auto">
                                                    <div className="card">
                                                            <div className="card-header">
                                                                    <h1>Register</h1>
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
                                                                                    name="email"
                                                                                    placeholder="Email"
                                                                                    type="text"
                                                                                    value={this.state.email}
                                                                                    onChange={this.onChange}
                                                                                    error={errors.email}
                                                                                />
                                                                            <InputField
                                                                                name="password"
                                                                                placeholder="Password"
                                                                                type="password"
                                                                                value={this.state.password}
                                                                                onChange={this.onChange}
                                                                                error={errors.password}
                                                                            />
                                                                            <InputField
                                                                                name="password2"
                                                                                placeholder="Re-enter password"
                                                                                type="password"
                                                                                value={this.state.password2}
                                                                                onChange={this.onChange}
                                                                                error={errors.password2}
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

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});


export default connect(mapStateToProps, { registerUser })(Register);