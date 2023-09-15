import React, { useState } from "react";
import s from "./Pin.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Pin = ({ imageUrl, addToLiked, removeFromLiked, isLiked }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleLikeClick = () => {
        if (isLiked) {
            removeFromLiked();
        } else {
            addToLiked();
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imageUrl} alt="Kitty" />
                {isHovered && (
                    <div onClick={handleLikeClick} className={s.like}>
                        {isLiked ? (
                            <FontAwesomeIcon icon={solidHeart} color="red" />
                        ) : (
                            <FontAwesomeIcon icon={regularHeart} color="gray" />
                        )}
                    </div>

                )}
            </div>
        </div>
    );
};

export default Pin;