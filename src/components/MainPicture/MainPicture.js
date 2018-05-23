import React, { Component } from 'react';

import './css/MainPicture.css';
import mainImage from '../../images/main.jpg';

const pictureStyle = {
    'max-width': '100%',
    height: 'auto'
};

class MainPicture extends Component {
    render() {
        return (
            <picture>
                <source media='(min-width: 650px)' srcSet={mainImage} />
                <source media='(min-width: 465px)' srcSet={mainImage} />
                <img className='fadeIn animated-slow' src={mainImage} alt='Honey in green landscape' style={pictureStyle} />
            </picture>
        );
    }
}

export default MainPicture;
