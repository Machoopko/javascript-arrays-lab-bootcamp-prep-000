const app = "I don't do much."


kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Bob");
}
