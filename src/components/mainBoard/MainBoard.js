import React, { useEffect, useState, useRef } from "react";
import s from "./MainBoard.module.css"
import Pin from "./Pin";
import { getKittyPhoto } from "../../api/kittensApi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import useLikedImages from "../lovelyKittens/useLikedImages";

const MainBoard = () => {
    const [images, setImages] = useState([]);
    const {
        likedImages,
        addToLiked,
        removeFromLiked,
        setLikedImages,
    } = useLikedImages();
    const pageRef = useRef(1);
    const location = useLocation();
    const isLovelyPage = location.pathname === "/lovely";
    console.log(location)

    const getImages = async () => {
        try {
            const data = await getKittyPhoto(pageRef.current);
            setImages((prevImages) => [...prevImages, ...data]);
            pageRef.current++;
        } catch (error) {
            console.error("Ошибка при загрузке изображений:", error);
        }
    };

    useEffect(() => {
        getImages();
    }, [isLovelyPage]);

    useEffect(() => {
        if (isLovelyPage) {
            const likedImagesFromStorage = JSON.parse(
                localStorage.getItem("likedImages")
            ) || [];
            setLikedImages(likedImagesFromStorage);
        }
    }, [location.pathname]);

    return (
        <div className={s.wrapper}>
            <InfiniteScroll
                dataLength={images.length}
                next={getImages}
                hasMore={true}
                loader={<h5>...загружаем ещё котиков...</h5>}
            >
                <div className={s.container}>
                    {images.map((image, index) => (
                        <Pin key={`${image.id}-${index}`}
                             imageUrl={image.url}
                             addToLiked={() => addToLiked(image.url)}
                             removeFromLiked={() => removeFromLiked(image.url)}
                             isLiked={likedImages.includes(image.url)}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default MainBoard;