const EventEmitter = require("events")

const player = new EventEmitter();

// Subscribing / Adding event listener
player.on("won", () => {
  console.log("Congradulations!")
})

// Subscribing / Adding event listener
player.on("lost", () => {
  console.log("Better luck next time!")
})

// Subscribing / Adding event listener
player.on("race", (result) => {
  if (result == "won") {
    console.log("Congradulations!")
  }
  if (result == "lost") {
    console.log("Congradulations!")
  }
  console.log("Better luck next time!")
})

process.on("exit", () => {
  console.log("Bye Bye!")
})

// Emitting event
player.emit("won")
player.emit("won")
player.emit("lost")
player.emit("race", "won")
player.emit("race", "lost")