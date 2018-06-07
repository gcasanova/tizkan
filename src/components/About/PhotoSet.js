import imageHoneyBlackBg from '../../images/honey_black_bg/default.jpg';
import imageHoneyBlackBg224 from '../../images/honey_black_bg/224x150.jpg';
import imageHoneyBlackBg280 from '../../images/honey_black_bg/280x187.jpg';
import imageHoneyBlackBg336 from '../../images/honey_black_bg/336x224.jpg';
import imageHoneyBlackBg560 from '../../images/honey_black_bg/560x374.jpg';
import imageHoneyBlackBg1120 from '../../images/honey_black_bg/1120x747.jpg';

import imageHoneyBack from '../../images/honey_back/default.jpg';
import imageHoneyBack136 from '../../images/honey_back/136x171.jpg';
import imageHoneyBack170 from '../../images/honey_back/170x214.jpg';
import imageHoneyBack204 from '../../images/honey_back/204x257.jpg';
import imageHoneyBack340 from '../../images/honey_back/340x429.jpg';
import imageHoneyBack680 from '../../images/honey_back/680x857.jpg';

import imageHoneyGreen from '../../images/honey_green/default.jpg';
import imageHoneyGreen224 from '../../images/honey_green/224x150.jpg';
import imageHoneyGreen280 from '../../images/honey_green/280x187.jpg';
import imageHoneyGreen336 from '../../images/honey_green/336x224.jpg';
import imageHoneyGreen560 from '../../images/honey_green/560x374.jpg';
import imageHoneyGreen1120 from '../../images/honey_green/1120x747.jpg';

import imageHoneyFront from '../../images/honey_front/default.jpg';
import imageHoneyFront252 from '../../images/honey_front/252x293.jpg';
import imageHoneyFront420 from '../../images/honey_front/420x488.jpg';
import imageHoneyFront840 from '../../images/honey_front/840x976.jpg';

import imageHoneyWall from '../../images/honey_wall/default.jpg';
import imageHoneyWall408 from '../../images/honey_wall/408x203.jpg';
import imageHoneyWall510 from '../../images/honey_wall/510x254.jpg';
import imageHoneyWall612 from '../../images/honey_wall/612x305.jpg';
import imageHoneyWall1020 from '../../images/honey_wall/1020x508.jpg';

const PHOTO_SET = [
    {
        src: imageHoneyBlackBg,
        srcSet: `${imageHoneyBlackBg224} 224w, ${imageHoneyBlackBg280} 280w, ${imageHoneyBlackBg336} 336w, ${imageHoneyBlackBg560} 560w, ${imageHoneyBlackBg1120} 1120w`,
        sizes: '(max-width: 768px) 224px, (max-width: 1000px) 280px, (max-width: 1200px) 336px, (max-width:1800px) 560px, 1120px',
        width: 2,
        height: 1.5,
        alt: 'Set with honey bottles and honey comb in the background'
    },
    {
        src: imageHoneyBack,
        srcSet: `${imageHoneyBack136} 136w, ${imageHoneyBack170} 170w, ${imageHoneyBack204} 204w, ${imageHoneyBack340} 340w, ${imageHoneyBack680} 680w`,
        sizes: '(max-width: 768px) 136px, (max-width: 1000px) 170px, (max-width: 1200px) 204px, (max-width:1800px) 340px, 680px',
        width: 1,
        height: 1.2,
        alt: 'Honey bottle back side'
    },
    {
        src: imageHoneyGreen,
        srcSet: `${imageHoneyGreen224} 224w, ${imageHoneyGreen280} 280w, ${imageHoneyGreen336} 336w, ${imageHoneyGreen560} 560w, ${imageHoneyGreen1120} 1120w`,
        sizes: '(max-width: 768px) 224px, (max-width: 1000px) 280px, (max-width: 1200px) 336px, (max-width:1800px) 560px, 1120px',
        width: 4,
        height: 3,
        alt: 'Honey bottles in the nature'
    },
    {
        src: imageHoneyFront,
        srcSet: `${imageHoneyFront252} 252w, ${imageHoneyFront420} 420w, ${imageHoneyFront840} 840w`,
        sizes: '(max-width: 1200px) 252px, (max-width:1800px) 420px, 840px',
        width: 0.8,
        height: 1,
        alt: 'Honey bottle front side'
    },
    {
        src: imageHoneyWall,
        srcSet: `${imageHoneyWall408} 408w, ${imageHoneyWall510} 510w, ${imageHoneyWall612} 612w, ${imageHoneyWall1020} 1020w`,
        sizes: '(max-width: 768px) 408px, (max-width: 1000px) 510px, (max-width: 1200px) 612px, 1020px',
        width: 2,
        height: 1,
        alt: 'Honey bottles on top of a rustic wall'
    }
];

export default PHOTO_SET;
