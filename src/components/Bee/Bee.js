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
                                        <h3 className='section-title'>{t('blackBee.title')}</h3>

                                        <p>{t('blackBee.first')} </p>
                                        <p>{t('blackBee.second')}</p>
                                        <p>{t('blackBee.third')}</p>
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
