const { get, request } = require("http")

get("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data: ${chunk}`)
  })
  res.on("end", () => {
    console.log("No more data")
  })
})

const req = request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data: ${chunk}`)
  })
  res.on("end", () => {
    console.log("No more data")
  })
})
req.end()

