import axiosInstance from "./api";

export const getKittyPhoto = async (page = 1, limit = 10) => {
    try {
        const response = await axiosInstance.get('search', {
            params: {
                page,
                limit,
            },
        });
        const images = response.data;
        console.log(images);
        return images;
    } catch (error) {
        throw error;
    }
};


