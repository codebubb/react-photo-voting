import React, { useCallback } from 'react';
import Image from './Image';

const ImageContainer = ({ id, upvotes, onUpvote }) => {
    const width = 400;
    const height = 400;

    const upvoteImage = useCallback(async () => {
        try {
            await fetch(`http://localhost:3000/upvote/${id}`, {
                method: 'PATCH'
            });
            onUpvote();
        } catch (error) {
            console.log(error);
        }

    });


    return (
        <div onClick={upvoteImage} className="image-container">
            <Image id={id} width={width} height={height}></Image>
            <p className="upvotes">
                <span className="thumb">👍</span>
                <span>{upvotes}</span>
            </p>
        </div>
    );
};

export default ImageContainer;