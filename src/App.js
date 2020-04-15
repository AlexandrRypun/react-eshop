import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from "jwt-decode";
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegistration from "./pages/login-registration/login-registration.component";
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
    componentDidMount() {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const user = jwtDecode(accessToken);
            this.updateCurrentUser(user);
        }
    }

    updateCurrentUser = (user) => {
        this.props.setCurrentUser(user);
    };

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginRegistration />)} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.user
});
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
