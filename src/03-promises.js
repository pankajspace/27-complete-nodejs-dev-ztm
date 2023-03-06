const flag = true;

const promise1 = new Promise((resolve, reject) => {
  if (flag) {
    resolve("Resolved")
  } else {
    reject("Rejected")
  }
})

promise1
  .then(res => res + "!")
  .then(res => {
    return res += "@";
  })
  .then(res => {
    res += "#"
    // throw new Error()
    console.log(res)
  })
  .catch(res => {
    console.log("catch")
  })

// ----------------------------------------------------

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved promise2"), 1000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved promise3"), 2000)
})

Promise.all([promise2, promise3]).then((res) => {
  console.log("all ", res)
})

// ----------------------------------------------------

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/users"
];

Promise.all(urls.map(url => {
  return fetch(url).then(res => res.json())
})).then(results => {
  console.log(results[0].slice(0, 2))
  console.log(results[1].slice(0, 2))
  console.log(results[2].slice(0, 2))
})