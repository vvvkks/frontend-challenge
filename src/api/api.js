import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/',
    headers: {
        'x-api-key': 'live_NCRYREPpaHJo9qygk792XOxbJGa04d2Mwer23GbolguztwbIlfoLso409iihFxoG',
    },
});
export default axiosInstance;
