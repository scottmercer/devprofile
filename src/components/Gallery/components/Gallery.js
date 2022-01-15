import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem';
import { DEFAULT_IMAGES } from '../constants/defaultImages';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ images = DEFAULT_IMAGES }) => {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = useCallback(
        (i = 0) => {
            setLightboxIsOpen(!lightboxIsOpen);
            setSelectedIndex(i);
        },
        [lightboxIsOpen],
    );

    return (
        <div>
            {images && (
                <div className="row">
                    {images.map((obj, i) => {
                        return (
                            <GalleryItem
                                key={i}
                                id={obj.id}
                                source={obj.source}
                                thumbnail={obj.thumbnail}
                                caption={obj.caption}
                                description={obj.description}
                                link={obj.link}
                                position={i}
                                toggleLightbox={toggleLightbox}
                            />
                        );
                    })}
                </div>
            )}

            {lightboxIsOpen && (
                <Lightbox
                    mainSrc={DEFAULT_IMAGES[selectedIndex].source}
                    nextSrc={
                        DEFAULT_IMAGES[
                            (selectedIndex + 1) % DEFAULT_IMAGES.length
                        ].source
                    }
                    prevSrc={
                        DEFAULT_IMAGES[
                            (selectedIndex + DEFAULT_IMAGES.length - 1) %
                                DEFAULT_IMAGES.length
                        ].source
                    }
                    onCloseRequest={() => toggleLightbox()}
                    onMovePrevRequest={() =>
                        setSelectedIndex(
                            (selectedIndex + DEFAULT_IMAGES.length - 1) %
                                DEFAULT_IMAGES.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setSelectedIndex(
                            (selectedIndex + 1) % DEFAULT_IMAGES.length,
                        )
                    }
                />
            )}
        </div>
    );
};

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array,
};

export default Gallery;
