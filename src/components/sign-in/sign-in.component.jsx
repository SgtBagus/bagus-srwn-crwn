import {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        const { email, password } = this.state;
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        value={email}
                        type="email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        value={password}
                        type="password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign in With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;