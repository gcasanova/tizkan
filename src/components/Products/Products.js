import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import ScrollAnimation from 'react-animate-on-scroll';
import GalleryImage from './GalleryImage';

import './css/Products.css';
import 'animate.css/animate.min.css';

import image1 from '../../images/lc_10.jpg';
import image2 from '../../images/lc_14.jpg';
import image4 from '../../images/lc_26.jpg';
import image5 from '../../images/lc_30.jpg';
import image6 from '../../images/lc_34.jpg';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

const PHOTO_SET = [
    {
        src: image4,
        width: 2,
        height: 1.5
    },
    {
        src: image1,
        width: 1,
        height: 1.2
    },
    {
        src: image5,
        width: 4,
        height: 3
    },
    {
        src: image2,
        width: 0.8,
        height: 1
    },
    {
        src: image6,
        width: 2,
        height: 1
    }
];

class Products extends Component {
    render() {
        return (
            <I18n>
                {
                    (t, { i18n }) => (
                        <div class="row" id="products">
                            <Gallery
                                margin={5}
                                photos={PHOTO_SET}
                                ImageComponent={GalleryImage}
                            />

                            <ScrollAnimation offset={100} duration={1.5} animateIn="fadeIn">
                                <article>
                                    <h3>PRODUCTS</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                                    </p>
                                </article>
                            </ScrollAnimation>        
                        </div>
                    )
                }
            </I18n>
        )
    }
}

export default Products;
