import { Grid } from 'react-bootstrap';
import React, { Component } from 'react';

import Product from '../Product/Product';
import About from '../About/About';
import Footer from '../Footer/Footer';

class Sections extends Component {
    render() {
        return (
            <Grid fluid>
                <Product />
                <About />
                <Footer />
            </Grid>
        )
    }
}

export default Sections;
