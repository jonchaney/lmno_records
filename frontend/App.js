import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header.js";
import NavBar from "./components/presentationals/navBar.js";
import Bands from "./components/presentationals/bands.js";

const App = () => (
    <div>
        <div className="top-container">
            <Route path="/" component={Header} />
            <Route path="/" component={NavBar} />
        </div>
        <Route path="/" component={Bands} />
    </div>
);

export default App;