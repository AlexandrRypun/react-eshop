import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegistration from "./pages/login-registration/login-registration.component";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/signin' component={LoginRegistration} />
            </Switch>
        </div>
    );
}

export default App;
