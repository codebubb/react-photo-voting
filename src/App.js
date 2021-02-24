import React, { useEffect, useCallback, useState } from 'react';
import ImageContainer from './ImageContainer';

export function App() {
    const retrieveImages = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/images');
            const imageData = await response.json();
            setImages(imageData);
        } catch (error) {
            console.log(error);
        }
    });
    const [images, setImages] = useState([])

    useEffect(() => {
        retrieveImages();
    }, [])

    return (
        <div className="app">
            <h1>🏞 Image Voting</h1>
            <div class="image-list">
                {images &&
                    images.map(({ id, upvotes }) => <ImageContainer key={id} id={id} upvotes={upvotes} onUpvote={retrieveImages}></ImageContainer>)
                }
            </div>
        </div>
    );
}