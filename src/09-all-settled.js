const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve("promise1"), 1000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject("promise2"), 1000)
})

// all exits with error when any promise fails 
Promise.all([promise1, promise2]).then(console.log).catch(e => console.log("error all"))

// allSettled will execute irrespective of any promise fails
Promise.allSettled([promise1, promise2]).then(console.log).catch(e => console.log("error allSettled"))