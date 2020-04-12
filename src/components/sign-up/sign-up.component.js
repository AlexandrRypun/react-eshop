import React from "react";
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            city: '',
            novaPoshtaDep: '',
            password: '',
            password2: '',
        }
    }

    render() {
        return (
            <div>
                registration
            </div>
        );
    }
}

export default SignUp;
