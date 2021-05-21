/*
function getTextFile() {
    fetch("textfile.txt")
        .then(response =>{
            return response.text();
        })
        .then(data => console.log(data))
        .catch(err=>console.log(err));
}




function getJsonFile(){ //get data from local json file
    fetch("myJsonFile.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}


function getExternal(){ //get external data from web
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => console.log(data[2].title))
        .catch(err => console.log(err));
}


getExternal();
 // getJsonFile();
// getTextFile();*/

class Request {
    get(url) { //Get request

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })


    }

    put(url,data){
        return new Promise(((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch(err => reject(err))

        }))
    }

    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
            })
                .then(message => resolve('Deleting process successful !'))
                .catch(err => reject(err))
        });


    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(albums => console.log(albums))
//     .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1, title: "binnaz"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId: 1, title: "binnaz"})
// .then(data => console.log(data))
//     .catch(err => console.log(err))

request.delete('https://jsonplaceholder.typicode.com/albums/1')
.then(msg => console.log(msg))