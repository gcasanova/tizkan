import React, { Component, Fragment } from 'react';

// components
import Navbar from './Navbar/Navbar';
import MainPicture from './MainPicture/MainPicture';
import Sections from './Sections/Sections';

class App extends Component {
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
