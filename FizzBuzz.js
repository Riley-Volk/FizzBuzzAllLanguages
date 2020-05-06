/**
 * FizzBuzz program written with javascript.
 * 
 * Author - Riley Volk
 * Date - 02.11.2020
 * In collaboration with no one!
 */

let FizzBuzz = function() {
    let array = []

    for(i = 1; array.length <= 100; i++) {
        if (i % 15 == 0) {
            array.push("FizzBuzz")
        } else if (i % 5 == 0) {
            array.push("Buzz")
        } else if (i % 3 == 0) {
            array.push("Fizz")
        } else {
            array.push(i)
        }
    }

    return array
}

console.log(FizzBuzz())
