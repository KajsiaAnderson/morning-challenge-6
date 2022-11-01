// You might know some pretty large perfect squares. But what about the NEXT one?
// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.


function perfectSquare (squareNumber){
   let x = Math.sqrt(squareNumber)
    if(x % 1 != 0){
        return -1
    }else{
        return ((x+1)*(x+1))
    }
}
console.log (perfectSquare(9))  //16
console.log (perfectSquare(289))  //324
console.log (perfectSquare(3000))  //-1





console.log('---------------')

//Jared's Solution:
function square(n) {
    return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1
}
console.log (square(9))  //16
console.log (square(289))  //324
console.log (square(3000))  //-1

console.log('---------------')







//Make a new function similar to the last one, the only difference being, your function can accept any number, and it must return the next highest square (negative numbers will return 0, as it is the next perfect square).


function nextSquare (squareNumber){
    let x = Math.sqrt(squareNumber)
    let y = Math.floor(x) + 1
    if( squareNumber < 0){
        return 0
    }else{
        return y * y
    }
 }
 console.log (nextSquare(9.82))  //16
 console.log (nextSquare(289))  //324
 console.log (nextSquare(-12))  //0




 console.log('---------------')

 //Jared's Solution:
function squareTwo(n) {
    if (n < 0) {
        return 0
    }

    n = Math.floor(n)
    return (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
}
console.log (squareTwo(9.82))  //16
console.log (squareTwo(289))  //324
console.log (squareTwo(-36.5))  //0