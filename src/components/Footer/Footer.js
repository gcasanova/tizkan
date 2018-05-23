import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import { Row, Col, Image, Glyphicon } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import FadeIn from 'react-lazyload-fadein';

import './css/Footer.css';

import image from '../../images/tizkan-circular.png';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

class About extends Component {
    render() {
        return (
            <I18n>
                {
                    (t, { i18n }) => (
                        <Row className='show-grid' id='footer'>
                            <Col sm={6} className='text-center hidden-xs'>
                                <FadeIn duration={1200}>
                                    {onload => (
                                        <Image src={image} onLoad={onload} responsive />
                                    )}
                                </FadeIn>
                                <ScrollAnimation offset={1000} duration={1.5} animateOnce='true' animateIn='bounceInLeft'>
                                    <h5>@ 2018 Tizkán &reg;</h5>
                                </ScrollAnimation>
                            </Col>

                            <Col sm={6}>
                                <ScrollAnimation offset={100} duration={1.5} animateOnce='true' animateIn='bounceInRight'>
                                    <article className='text-center'>
                                        <h2>CONTACT US</h2>

                                        <Row className='show-grid'>
                                            <Col xs={12} className='flex'>
                                                <Col className='glyphicon'>
                                                    <Glyphicon glyph='earphone' />
                                                </Col>
                                                <Col>
                                                    <h4> +34 678 475 546</h4>
                                                    <h4> +34 666 079 431</h4>
                                                </Col>
                                            </Col>
                                        </Row>

                                        <Row className='show-grid flex'>
                                            <Col xs={12} className='flex'>
                                                <Col className='glyphicon'>
                                                    <Glyphicon glyph='envelope' />
                                                </Col>
                                                <Col>
                                                    <h4> miel.tizkan@gmail.com</h4>
                                                </Col>
                                            </Col>
                                        </Row>

                                        <h5 className='visible-xs'>@ 2018 Tizkán &reg;</h5>
                                    </article>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    )
                }
            </I18n>
        )
    }
}

export default About;
