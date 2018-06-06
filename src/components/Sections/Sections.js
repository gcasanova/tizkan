import { Grid } from 'react-bootstrap';
import React, { Component } from 'react';

import Bee from '../Bee/Bee';
import About from '../About/About';
import Footer from '../Footer/Footer';

class Sections extends Component {
    render() {
        return (
            <Grid fluid>
                <About />
                <Bee />
                <Footer />
            </Grid>
        )
    }
}

export default Sections;
