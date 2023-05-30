import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const getAllFoodMenu = ({ limit }) => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`/v1/food-menu`, { params: { limit } })
            .then(async (res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

const removeFoodMenu = (data) => {
    return new Promise(async (resolve, reject) => {
        await axios
            .delete(`/v1/food-menu`, { data })
            .then(async (res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

export { getAllFoodMenu, removeFoodMenu }