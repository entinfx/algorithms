// 0 1 2 3
// -----
// 0 - 0 1 - 0 1 2 - 0 1 2 3
//           0 1 3
//     0 2 - 0 2 3
//     0 3
//
// 1 - 1 2 - 1 2 3
//     1 3
//
// 2 - 2 3
//
// 3

const numbers = [0, 1, 2, 3, 4]
const target = 5

let combinations = []

function explore(startingIndex, numbers, startingSequence = []) {
    for (let i = startingIndex; i < numbers.length; i++) {
        const currentNumber = numbers[i]
        const currentCombination = startingSequence.concat(currentNumber)

        combinations.push(currentCombination)

        if (i < numbers.length - 1) {
            explore(i + 1, numbers, currentCombination)
        }
    }
}

explore(0, numbers)

console.log(
    combinations.filter(combination => {
        return combination.reduce((accumulator, element) => {
            return accumulator += element
        }, 0) === target
    })
)

