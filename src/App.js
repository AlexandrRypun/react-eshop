import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";

const HatsPage = () => {
    return <div><h1>Hats</h1></div>
};

function App() {
    return (
        <div>
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={true} path='/shop/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
