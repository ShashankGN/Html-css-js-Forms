let fetchResPonse=fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
);

console.log(fetchResPonse);

fetchResPonse.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));

console.log("hello world");