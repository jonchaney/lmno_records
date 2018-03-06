import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header.js";
import NavBar from "./components/presentationals/navBar.js";
import FeaturedArtistContainer from "./components/artists/featuredArtistsContainer.js";
import About from "./components/presentationals/about.js";
import Equipment from "./components/presentationals/equipment.js";
import Contact from "./components/presentationals/contact.js";

const App = () => (
    <div>
        <div className="top-container">
            <Route path="/" component={Header} />
            <Route path="/" component={NavBar} />
        </div>
        <Route exact path="/" component={FeaturedArtistContainer} />
        <div className="space-info">
            <Route exact path="/about" component={About} />
            <Route exact path="/equipment" component={Equipment} />
            <Route exact path="/contact" component={Contact} />
        </div>
    </div>
);

export default App;