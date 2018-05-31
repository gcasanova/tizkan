import React, { Component, Fragment } from 'react';

// components
import Navbar from './Navbar/Navbar';
import MainPicture from './MainPicture/MainPicture';
import Sections from './Sections/Sections';
import { addBackToTop } from 'vanilla-back-to-top';

class App extends Component {
    componentDidMount() {
        addBackToTop();
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <MainPicture />
                <Sections />
            </Fragment>
        );
    }
}

export default App;
