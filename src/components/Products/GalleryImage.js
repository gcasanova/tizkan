import React from 'react';
import FadeIn from 'react-lazyload-fadein';

const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  float: 'left',
  position: 'relative'
}

const GalleryImage = ({ index, onClick, photo, margin }) => {
  return (
    <div style={{ margin, width: photo.width, ...cont }}>
      <FadeIn height={photo.height} offset={100} duration={1500}>
        {onload => (
          <img {...photo} onLoad={onload} onClick={(e) => onClick(e, { index, photo })} />
        )}
      </FadeIn>
    </div>
  )
};

export default GalleryImage;