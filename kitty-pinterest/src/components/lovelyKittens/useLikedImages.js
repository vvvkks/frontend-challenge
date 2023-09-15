import { useState } from "react";

const useLikedImages = () => {
    const [likedImages, setLikedImages] = useState(
        JSON.parse(localStorage.getItem("likedImages")) || []
    );

    const addToLiked = (imageUrl) => {
        const updatedLikedImages = [...likedImages, imageUrl];
        setLikedImages(updatedLikedImages);
        localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
    };

    const removeFromLiked = (imageUrl) => {
        console.log("Trying to remove:", imageUrl);
        const updatedLikedImages = likedImages.filter(
            (image) => image !== imageUrl
        );
        console.log("Updated likedImages:", updatedLikedImages);
        setLikedImages(updatedLikedImages);
        localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
    };


    return { likedImages, addToLiked, removeFromLiked, setLikedImages };
};

export default useLikedImages;

