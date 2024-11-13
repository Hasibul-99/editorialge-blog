import axios from 'axios'

const base_url = import.meta.env.PUBLIC_BASEURL

export const postData = async (query, data) => {
    try {
        const response = await axios.post(`${base_url}${query}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
    
}