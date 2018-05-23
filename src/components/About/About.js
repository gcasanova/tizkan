import ReactDOM from 'react-dom';
import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import FadeIn from 'react-lazyload-fadein';

import './css/About.css';

import image from '../../images/lc_35.jpg';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

class About extends Component {
    constructor(props) {
        super(props);

        this.fixFadeInDisplay = this.fixFadeInDisplay.bind(this);
        this.customOnLoad = this.customOnLoad.bind(this);
    }

    fixFadeInDisplay() {
        const element = ReactDOM.findDOMNode(this).getElementsByClassName('fadeInParent')[0];
        element.firstChild.style.display = 'block';
    }

    customOnLoad(callback) {
        this.fixFadeInDisplay();
        callback();
    }

    render() {
        return (
            <I18n>
                {
                    (t, { i18n }) => (
                        <Row className='show-grid flex' id='about'>
                            <Col md={12} lg={6}>
                                <ScrollAnimation offset={100} duration={1.5} animateOnce='true' animateIn='bounceInLeft'>
                                    <article className='text-center'>
                                        <h3>ABOUT US</h3>

                                        <p>
                                            Somos distribuidores de miel elaborada única y exclusivamente por la Abeja Negra Canaria, raza endémica por la que tratamos de hacer una labor de protección y concienciación. Colaboramos con apicultores profesionales de todo el archipiélago, prestándoles asesoramiento y apoyo en sus explotaciones locales.
                                        </p>
                                        <p>
                                            Las abejas cumplen una función crucial de polinización en nuestro planeta. Fomentando el consumo de miel local, impulsamos la actividad apicultora y por tanto, influimos de forma positiva sobre nuestro medio ambiente. Nosotros también ayudamos a la protección de una raza autóctona, nuestra abeja. Además, la miel es un producto que contiene antioxidantes, vitaminas y minerales, además de ser antimicrobiana y antiséptica, por lo que usarla en lugar de azúcar es un hábito saludable.
                                        </p>
                                    </article>
                                </ScrollAnimation>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className='fadeInParent'>
                                    <FadeIn duration={1500}>
                                        {onload => (
                                            <Image src={image} onLoad={() => this.customOnLoad(onload)} responsive />
                                        )}
                                    </FadeIn>
                                </div>
                            </Col>
                        </Row>
                    )
                }
            </I18n>
        )
    }
}

export default About;
