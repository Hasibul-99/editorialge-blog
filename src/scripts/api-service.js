import axios from 'axios'

const base_url = import.meta.env.PUBLIC_BASEURL

export const postData = async (query, data) => {
    try {
        const token = import.meta.env.PUBLIC_STRAPI_TOKEN;
        const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
        const response = await axios.post(`${base_url}${query}`, data, { headers });
        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}