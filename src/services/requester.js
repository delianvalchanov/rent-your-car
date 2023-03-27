const request = async (method, url, data) => {
    const options = {}

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    const responce = await fetch(url, options);

    try {
        const result = await responce.json();
        return result;
    } catch (error) {
        return {};
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE'); 