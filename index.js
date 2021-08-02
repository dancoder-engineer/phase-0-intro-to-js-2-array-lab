// Write your solution here!
let cats =  ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) { 
    cats.push(name)
}
//1) appends a cat to the end of the cats array

function destructivelyPrependCat(name) { 
    cats.unshift(name)
}
//2) prepends a cat to the beginning of the cats array

function destructivelyRemoveLastCat() {
    cats.pop()
 }
//3) removes the last cat from the cats array

function destructivelyRemoveFirstCat() { 
    cats.shift()
}
//4) removes the first cat from the cats array

function appendCat(name) { 
    return [...cats.slice(), name]
}
//5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function prependCat(name) { 
    return[name, ...cats.slice()]
}
//6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat() { 
    return[...cats.slice(0, -1)]
}
//7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat() { 
    return[...cats.slice(1)]
}