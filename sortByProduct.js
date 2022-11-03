// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:
// Input: 23, 2, 3, 4, 5
// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4
// 2 => 2 * 2 = 4 -> Output-Pos 1
// 3 => 3 * 3 = 9 -> Output-Pos 2
// 4 => 4 * 4 = 16 -> Output-Pos 3
// 5 => 5 * 5 = 25 -> Output-Pos 5
// Output: 2, 3, 4, 23, 5



function sortArr(arr) {
    arr = arr.map((num, index) => {
        return [num, index + 1]
    })
    // console.log('this is the first mapped array', arr)

    arr = arr.map((numArr) => {
        return [numArr[0], numArr[0] * numArr[1]]
    })
    // console.log('this is the second mapped array', arr)

    arr.sort((a, b) => {
        return a[1] - b[1]
    })
    // console.log('this is the sorted array of arrays', arr)

    //turn numArr back to first value (index 0)
    arr = arr.map((numArr) => {
        return numArr[0]
    })
    // console.log('this is the final mapped array', arr)
    return arr
}

console.log(sortArr([23, 2, 3, 4, 5]))   // 2, 3, 4, 23, 5