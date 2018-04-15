import { I18n } from 'react-i18next';
import React, { Component } from 'react';

import './css/MainPicture.css';
import mainImage from '../../images/main.jpg';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

const pictureStyle = {
    'max-width': '100%',
    height: 'auto'
};


class MainPicture extends Component {
    render() {
        return (
        <I18n>
            {
            (t, { i18n }) => (
                <picture>
                    <source media="(min-width: 650px)" srcSet={mainImage} />
                    <source media="(min-width: 465px)" srcSet={mainImage} />
                    <img src={mainImage} alt="Flowers" style={pictureStyle} />
                </picture>
            )
            }
        </I18n>
        );
    }
}

export default MainPicture;
