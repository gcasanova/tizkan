import React, { Component, Fragment } from 'react';

// components
import Navbar from './Navbar/Navbar';
import MainPicture from './MainPicture/MainPicture';
import Products from './Products/Products';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <MainPicture />
                <Products />
            </Fragment>
        );
    }
}

export default App;
