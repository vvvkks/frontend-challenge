import React, { useEffect, useState } from "react";
import s from "./Lovely.module.css"
import Pin from "../mainBoard/Pin";
import useLikedImages from "./useLikedImages";

function Lovely() {
    const [images, setImages] = useState([]);
    const { likedImages, removeFromLiked } = useLikedImages();

    useEffect(() => {
        setImages(likedImages);
    }, [likedImages]);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {images.map((image, index) => (
                    <Pin
                        key={index}
                        imageUrl={image}
                        removeFromLiked={() => removeFromLiked(image)}
                        isLiked={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default Lovely;