import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import { Row, Col, Image, Glyphicon, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import FadeIn from 'react-lazyload-fadein';

import './css/Footer.css';

import tizkanImage from '../../images/tizkan-circular.png';
import spanishFlagImage from '../../images/spanish.png';
import englishFlagImage from '../../images/english.png';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            languageValue: 1
        }

        this.onChange = this.onChange.bind(this);
        this.setToggleButton = this.setToggleButton.bind(this);
    }

    componentDidMount() {
        i18n.on('init', this.setToggleButton);
    }

    setToggleButton() {
        const initLanguage = i18n.language.split('-')[0];
        if ('en' === initLanguage) {
            this.setState({ languageValue: 2 });
        } else {
            this.setState({ languageValue: 1 });
        }
    }

    onChange(value) {
        const lang = value === 1 ?
            'es' :
            'en';

        i18n.changeLanguage(lang);
        this.setState({ languageValue: value });
    }

    render() {
        return (
            <I18n>
                {
                    (t, { i18n }) => (
                        <Row className='show-grid' id='footer'>
                            <Col md={6} className='text-center hidden-sm hidden-xs'>
                                <FadeIn duration={1200}>
                                    {onload => (
                                        <Image src={tizkanImage} onLoad={onload} responsive />
                                    )}
                                </FadeIn>
                                <ScrollAnimation offset={1000} duration={1.5} animateOnce='true' animateIn='bounceInLeft'>
                                    <h5>@ 2018 Tizkán &reg;</h5>
                                </ScrollAnimation>
                            </Col>

                            <Col md={4}>
                                <ScrollAnimation offset={100} duration={1.5} animateOnce='true' animateIn='bounceInRight'>
                                    <article className='text-center'>
                                        <h2>{t('contactUs')}</h2>

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

                            <Col md={2}>
                                <ScrollAnimation className='flex' offset={10} duration={1.5} animateOnce='true' animateIn='bounceInRight'>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup type='radio' name='options' defaultValue={this.state.languageValue} value={this.state.languageValue} onChange={this.onChange}>
                                            <ToggleButton value={1}><Image src={spanishFlagImage} responsive /></ToggleButton>
                                            <ToggleButton value={2}><Image src={englishFlagImage} responsive /></ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
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
