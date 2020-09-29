import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../from-input/form-input.compnent'

import { SignInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
                    <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label='password' required />
                    <CustomButton type='submit'>Sign In </CustomButton>
                    <CustomButton onClick={SignInWithGoogle}>Sign In w/ Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;


