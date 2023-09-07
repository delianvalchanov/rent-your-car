import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/cars';

export const carServiceFactory = (token) => {
    const request = requestFactory(token)

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const cars = Object.values(result);

        return cars;
    }

    const getOne = async (articleId) => {
        const result = await request.get(`${baseUrl}/${articleId}`);

        return result;
    }

    const create = async (carData) => {
        const result = await request.post(baseUrl, carData);

        return result;
    }

    const edit = async (articleId, carData) => {
        const result = await request.put(`${baseUrl}/${articleId}`, carData)

        return result;
    }

    const deleteGame = (articleId) => request.delete(`${baseUrl}/${articleId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteGame
    }
}

