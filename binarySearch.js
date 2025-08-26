// Find the index of a given element in the sorted array

const sortedArray = [2, 4, 12, 63, 80, 128, 4091, 75390]
const target = 128


function binarySearch(startIndex, endIndex) {
    if (startIndex > endIndex) {
        console.log('Error: \'startIndex\' is greater than \'endIndex\'.')
        return undefined
    }

    const currentMiddleIndex = Math.floor((startIndex + endIndex) / 2)
    const currentMiddleValue = sortedArray[currentMiddleIndex]

    if (target === currentMiddleValue) {
        return currentMiddleIndex
    }

    if (target < currentMiddleValue) {
        return binarySearch(startIndex, currentMiddleIndex - 1)
    }

    if (target > currentMiddleValue ) {
        return binarySearch(currentMiddleIndex + 1, endIndex)
    }
}

const index = binarySearch(0, sortedArray.length - 1)
console.log('Finished searching for value ' + target + '.' + ' Found at index ' + index + '.')

