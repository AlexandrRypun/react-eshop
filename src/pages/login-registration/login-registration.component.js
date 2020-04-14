import React from "react";
import './login-registration.styles.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LoginRegistration = ({ updateCurrentUser }) => (
    <div className='sign-in-and-sign-up'>
        <SignIn updateCurrentUser={updateCurrentUser}/>
        <SignUp />
    </div>
);

export default LoginRegistration;
