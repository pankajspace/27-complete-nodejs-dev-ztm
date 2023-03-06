const numbers = [1, 2, 3, 4, 5]

function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e)
}

sum(...numbers)

console.log("-------------------------------------------------------");

const animals = {
  tiger: 20,
  bird: 5,
  cat: 11,
  monkey: 7
}

const { tiger, bird, ...rest } = animals;

function print(p1, p2, p3) {
  console.log(p1)
  console.log(p2)
  console.log(p3)
}

print(tiger, bird, rest)