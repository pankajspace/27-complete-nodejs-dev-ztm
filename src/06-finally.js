const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/users"
];

// finally will always run
Promise.all(urls.map(url => {
  return fetch(url).then(res => res.json())
}))
  .then(results => {
    throw Error;
    console.log(results[0].slice(0, 2))
    console.log(results[1].slice(0, 2))
    console.log(results[2].slice(0, 2))
  })
  .catch((error) => console.log("catch"))
  .finally(() => console.log("finally"))