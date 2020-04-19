import React from "react";
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInStart } from "../../redux/user/user.actions";

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.props.signInStart(this.state);
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signInStart: data => dispatch(signInStart(data))
});
export default connect(null, mapDispatchToProps)(SignIn);
