import React, { Component } from 'react';

import './css/MainPicture.css';

import image from '../../images/main/default.jpg';
import image150 from '../../images/main/150x81.jpg';
import image300 from '../../images/main/300x162.jpg';
import image600 from '../../images/main/600x323.jpg';
import image800 from '../../images/main/800x430.jpg';
import image1000 from '../../images/main/1000x538.jpg';
import image1200 from '../../images/main/1200x646.jpg';
import image2000 from '../../images/main/2000x1077.jpg';

const pictureStyle = {
    'max-width': '100%',
    height: 'auto'
};

class MainPicture extends Component {
    render() {
        return (
            <picture>
                <source media='(min-width: 2000px)' srcSet={image} />
                <source media='(min-width: 1200px)' srcSet={image2000} />
                <source media='(min-width: 1000px)' srcSet={image1200} />
                <source media='(min-width: 800px)' srcSet={image1000} />
                <source media='(min-width: 600px)' srcSet={image800} />
                <source media='(min-width: 300px)' srcSet={image600} />
                <source media='(min-width: 150px)' srcSet={image300} />
                <source srcSet={image150} />

                <img className='fadeIn animated-slow' src={image} alt='Honey in green landscape' style={pictureStyle} />
            </picture>
        );
    }
}

export default MainPicture;
