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

import imageHoneyFront from '../../images/honey_front/default.jpg';
import imageHoneyFront168 from '../../images/honey_front/168x195.jpg';
import imageHoneyFront210 from '../../images/honey_front/210x244.jpg';
import imageHoneyFront252 from '../../images/honey_front/252x293.jpg';
import imageHoneyFront420 from '../../images/honey_front/420x488.jpg';
import imageHoneyFront600 from '../../images/honey_front/600x696.jpg';
import imageHoneyFront840 from '../../images/honey_front/840x976.jpg';

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
                                        <h3 className='section-title'>ABOUT US</h3>

                                        <p>
                                            Somos distribuidores de miel elaborada única y exclusivamente por la Abeja Negra Canaria, raza endémica por la que tratamos de hacer una labor de protección y concienciación.
                                        </p>
                                        <p>
                                            Desde el municipio de Granadilla de Abona, en el sur de Tenerife, desarrollamos esta actividad con la ayuda de diferentes apicultores de todo el archipiélago canario. Nuestra experiencia en el sector, a lo largo de los años, nos ha aportado unos conocimientos que nos permiten seleccionar las mieles de la más alta calidad.
                                        </p>
                                        <p>
                                            Nuestra miel no tiene ningún tratamiento, una vez es extraída de la colmena, se envasa y se pone a disposición de nuestros clientes. Además, trabajamos con múltiples envases y tipos de miel, dependiendo de la época y localización disponemos de diferentes variedades.
                                        </p>
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
                                            <Image src={imageHoneyFront} srcSet={`${imageHoneyFront168} 168w, ${imageHoneyFront210} 210w, ${imageHoneyFront252} 252w, ${imageHoneyFront420} 420w, ${imageHoneyFront600} 600w, ${imageHoneyFront840} 840w`}
                                                sizes='(max-width: 180px) 168px, (max-width: 220px) 210px, (max-width: 260px) 252px, (max-width: 500px) 420px, (max-width: 600px) 600px, 840px'
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
