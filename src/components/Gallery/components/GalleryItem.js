import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({
    id,
    source,
    thumbnail,
    caption,
    description,
    position,
    toggleLightbox,
    link,
}) => {
    const onClick = useCallback(
        (e) => {
            e.preventDefault();
            toggleLightbox(position);
        },
        [position, toggleLightbox],
    );

    return (
        <article key={id} className="12u work-item">
            <a className="image fit thumb" href={source} onClick={onClick}>
                <img alt="gallery item" src={thumbnail} />
            </a>

            <h3>{caption}</h3>
            <p>{description}</p>
            {link && (
                <a rel="noreferrer" target="_blank" href={link}>
                    Preview
                </a>
            )}
        </article>
    );
};

GalleryItem.displayName = 'GalleryItem';
GalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    toggleLightbox: PropTypes.func.isRequired,
};

export default GalleryItem;
