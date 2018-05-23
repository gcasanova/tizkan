import ReactDOM from 'react-dom';
import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import GalleryImage from './GalleryImage';
import { Row, Col, Image } from 'react-bootstrap';
import FadeIn from 'react-lazyload-fadein';
import ScrollAnimation from 'react-animate-on-scroll';

import './css/Product.css';

import image1 from '../../images/lc_10.jpg';
import image2 from '../../images/lc_14.jpg';
import image4 from '../../images/lc_26.jpg';
import image5 from '../../images/lc_30.jpg';
import image6 from '../../images/lc_34.jpg';

import image from '../../images/lc_14.jpg';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

const PHOTO_SET = [
    {
        src: image4,
        width: 2,
        height: 1.5,
        alt: 'Set with honey bottles and honey comb in the background'
    },
    {
        src: image1,
        width: 1,
        height: 1.2,
        alt: 'Honey bottle back side'
    },
    {
        src: image5,
        width: 4,
        height: 3,
        alt: 'Honey bottles in the nature'
    },
    {
        src: image2,
        width: 0.8,
        height: 1,
        alt: 'Honey bottle front side'
    },
    {
        src: image6,
        width: 2,
        height: 1,
        alt: 'Honey bottles on top of a rustic wall'
    }
];

class Product extends Component {
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
                        <Row className='show-grid flex' id='product'>
                            <Col xs={12} lg={3} lgPush={9}>
                                <ScrollAnimation offset={100} duration={1.5} animateOnce='true' animateIn='bounceInRight'>
                                    <article className='text-center'>
                                        <h3>PRODUCT</h3>

                                        <p>
                                            El mayor tesoro que posee la apicultura de las Islas Canarias es su raza de abejas, una raza autóctona. La Abeja Negra Canaria, escindida hace unos 200.000 años de un brazo común que lo emparenta con las abejas africanas y portuguesas, ha desarrollado unas características genéticas que la hacen única en el mundo.
                                        </p>
                                        <p>
                                            Como la mayoría de los seres vivos de las Islas Canarias, son consecuencia del efecto del aislamiento durante siglos en su proceso de evolución y adaptación al medio, constituyendo de este modo a ser parte integrante de la biodiversidad específica de Canarias.
                                        </p>
                                        <span className="visible-xs">SIZE XS</span>
                                        <span className="visible-sm">SIZE SM</span>
                                        <span className="visible-md">SIZE MD</span>
                                        <span className="visible-lg">SIZE LG</span>
                                    </article>
                                </ScrollAnimation>
                            </Col>
                            <Col xs={12} lg={9} lgPull={3}>
                                <div className='hidden-xs'>
                                    <Gallery
                                        margin={5}
                                        photos={PHOTO_SET}
                                        ImageComponent={GalleryImage}
                                    />
                                </div>

                                <div className='fadeInParent visible-xs'>
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

export default Product;
