import ReactDOM from 'react-dom';
import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import FadeIn from 'react-lazyload-fadein';

import './css/Bee.css';

import image from '../../images/honey_beekeeper/default.jpg';
import image400 from '../../images/honey_beekeeper/400x430.jpg';
import image600 from '../../images/honey_beekeeper/600x644.jpg';
import image1000 from '../../images/honey_beekeeper/1000x1073.jpg';
import image2000 from '../../images/honey_beekeeper/2000x2145.jpg';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

class Bee extends Component {
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
                        <Row className='show-grid flex' id='bee'>
                            <Col md={12} lg={6}>
                                <ScrollAnimation offset={100} duration={1.5} animateOnce='true' animateIn='bounceInLeft'>
                                    <article className='text-center'>
                                        <h3 className='section-title'>BLACK BEE</h3>

                                        <p>
                                            El mayor tesoro que posee la apicultura de las Islas Canarias es su raza de abejas, una raza autóctona. La Abeja Negra Canaria, escindida hace unos 200.000 años de un brazo común que lo emparenta con las abejas africanas y portuguesas, ha desarrollado unas características genéticas que la hacen única en el mundo.
                                        </p>
                                        <p>
                                            Como la mayoría de los seres vivos de las Islas Canarias, son consecuencia del efecto del aislamiento durante siglos en su proceso de evolución y adaptación al medio, constituyendo de este modo a ser parte integrante de la biodiversidad específica de Canarias.
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
                                            <Image src={image} srcSet={`${image400} 400w, ${image600} 600w, ${image1000} 1000w, ${image2000} 2000w`}
                                                sizes='(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 1000px) 1000px, (max-width: 1199px) 1199px, (max-width: 1200px) 600px, (max-width: 2000px) 1000px, 2000px'
                                                onLoad={() => this.customOnLoad(onload)} responsive />
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

export default Bee;
