async function fetchUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
  // const data = await res.json()
  console.log(data)
}

fetchUsers()

// --------------------------------------------------------------

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/users"
];

const getData = async () => {
  try {
    const [posts, albums, users] = await Promise.all(urls.map(url =>
      fetch(url).then(res => res.json())
    ))
    console.log("posts", posts.slice(0, 2))
    console.log("albums", albums.slice(0, 2))
    console.log("users", users.slice(0, 2))
  } catch (error) {
    console.log(error)
  }
}

getData()
