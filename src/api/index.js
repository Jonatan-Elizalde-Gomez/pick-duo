import axios from 'axios';

const BASE_URL = 'https://dbah0qjgpg.execute-api.us-east-1.amazonaws.com/prod';

// Configura un cliente Axios para reutilizarlo
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const Api = {
    fetchItem: async (category, id) => {
        try {
            const response = await apiClient.get(`/${category}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    fetchItems: async (category) => {
        try {
            const response = await apiClient.get(`/${category}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createItem: async (category, data) => {
        try {
            const response = await apiClient.post(`/${category}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateItem: async (category, id, data) => {
        try {
            const response = await apiClient.put(`/${category}/${id}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteItem: async (category, id) => {
        try {
            const response = await apiClient.delete(`/${category}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default Api;