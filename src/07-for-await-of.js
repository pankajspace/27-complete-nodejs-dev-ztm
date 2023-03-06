const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/users"
];

const getData2 = async () => {
  try {
    const arrPromises = urls.map(url => fetch(url))
    for await (const promise of arrPromises) {
      const data = await promise.json()
      console.log(data.slice(0, 2))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log("finally")
  }
}

getData2()