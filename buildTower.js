// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.
// Each block is represented by a *.

// For example, a tower of 3 floors looks like this (note the spacing):
// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]



function buildTower(num){
   let lengthOfStr = num * 2 - 1
   let arr = []

   for (let i = 1; i <= num; i++){
        let starAmount = 2 * i - 1
        let halfSpaceAmount = (lengthOfStr - starAmount) / 2

        let halfSpaces = ''.padStart(halfSpaceAmount, ' ')
        let starStr = ''.padStart(starAmount, '*')

        arr.push(halfSpaces + starStr + halfSpaces)
   }

   return arr
}


console.log(buildTower(3))
console.log(buildTower(6))

