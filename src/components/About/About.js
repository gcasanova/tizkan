import ReactDOM from 'react-dom';
import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import GalleryImage from './GalleryImage';
import { Row, Col, Image } from 'react-bootstrap';
import FadeIn from 'react-lazyload-fadein';
import ScrollAnimation from 'react-animate-on-scroll';
import PhotoSet from './PhotoSet';

import './css/About.css';

import imageHoneyFront300 from '../../images/honey_front/300x347.png';
import imageHoneyFront600 from '../../images/honey_front/600x694.png';
import imageHoneyFront800 from '../../images/honey_front/800x925.png';

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
                            <Col xs={12} lg={3} lgPush={9}>
                                <ScrollAnimation offset={100} duration={1.5} animateOnce='true' animateIn='bounceInRight'>
                                    <article className='text-center'>
                                        <h3 className='section-title'>{t('aboutUs.title')}</h3>

                                        <p>{t('aboutUs.first')}</p>
                                        <p>{t('aboutUs.second')}</p>
                                        <p>{t('aboutUs.third')}</p>
                                    </article>
                                </ScrollAnimation>
                            </Col>
                            <Col xs={12} lg={9} lgPull={3}>
                                <div className='hidden-xs'>
                                    <Gallery
                                        margin={5}
                                        photos={PhotoSet}
                                        ImageComponent={GalleryImage}
                                    />
                                </div>

                                <div className='fadeInParent visible-xs'>
                                    <FadeIn duration={1500}>
                                        {onload => (
                                            <Image src={imageHoneyFront800} srcSet={`${imageHoneyFront300} 300w, ${imageHoneyFront600} 600w, ${imageHoneyFront800} 800w`}
                                                sizes='(max-width: 300px) 300px, (max-width: 600px) 600px, 800px'
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

export default About;
