import * as request from "./requester";

const baseUrl = 'http://127.0.0.1:3030/jsonstore/cars';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const cars = Object.values(result);

    return cars;

}

export const create = async (carData) => {
    const result = await request.post(baseUrl, carData)

    console.log(result);

    return result;
}