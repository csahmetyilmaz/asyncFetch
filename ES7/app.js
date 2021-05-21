class Request {
    async get(url) { //Get request

        const response = await fetch(url); //response object
        const data = await response.json(); //JSON object
        return data;

    }

    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })// response object
        const responseData = await response.json();
        return responseData;
    }

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const putData = await response.json();
        return putData;

    }

    async delete(url) {

        const response = await fetch(url, {
            method: 'DELETE',
        });

        return "Data deleted";

    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => console.log(albums))
    .catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1, title: "binnaz"})
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/10", {userId: 1, title: "tarkan put"})
    .then(data => console.log(data))
    .catch(err => console.log(err))

request.delete('https://jsonplaceholder.typicode.com/albums/1')
    .then(msg => console.log(msg))