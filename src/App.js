import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegistration from "./pages/login-registration/login-registration.component";
import jwtDecode from "jwt-decode";

class App extends React.Component {
    state = {
        user: null
    };

    componentDidMount() {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const user = jwtDecode(accessToken);
            this.updateCurrentUser(user);
        }

    }

    updateCurrentUser = (user) => {
        this.setState({ user });
    };

    render() {
        return (
            <div>
                <Header user={this.state.user} updateCurrentUser={this.updateCurrentUser} />
                <Switch>
                    <Route exact={true} path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' render={() => <LoginRegistration updateCurrentUser={this.updateCurrentUser} />} />
                </Switch>
            </div>
        );
    }
}

export default App;
