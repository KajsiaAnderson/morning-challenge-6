// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// Decimal Roman
//     1: I
//     5: V
//     10: X
//     50: L
//     100: C
//     500: D
//     1000: M


function convertToRom(num) {
   let answer = ''

    while(num > 0){
        if(num === 1000){
            answer += "M"
            num -= 1000
        }else if(num >= 500){
            answer += "D"
            num -= 500
        }else if(num >= 100){
            answer += "C"
            num -= 100
        }else if(num >= 50){
            answer += "L"
            num -= 50
        }else if(num >= 10){
            answer += "X"
            num -= 10
        }else if(num >= 5){
            answer += "V"
            num -= 5
        }else if (num >= 1){
            answer += "I"
            num -= 1
        }
    }

   return answer
}

console.log(convertToRom(99))  //LXXXXVIIII
console.log(convertToRom(1000))  //M
console.log(convertToRom(267))  //CCLXVII