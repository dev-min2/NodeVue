function testConn() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Cache-Control' : 'no-cache'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json;
    })
}

async function getJsonData() {
    const result = await testConn(); // Promise를 반환해야만 await(blocking)함..
    console.log(result);
}

getJsonData();