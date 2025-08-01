// Find the index of a given element in the sorted array

const sortedArray = [2, 4, 12, 63, 80, 128, 4091, 75390]
const target = 128

function findIndex(target, sortedArray) {
    console.log('Starting searching for value ' + target + '.')

    function binarySearch(startIndex, endIndex) {
        if (startIndex > endIndex) {
            console.log('Error: \'startIndex\' is greater than \'endIndex\'.')
            return undefined
        }

        const currentMiddleIndex = Math.floor((startIndex + endIndex) / 2)
        console.log('Current middle index: ' + currentMiddleIndex + '.')

        const currentMiddleValue = sortedArray[currentMiddleIndex]
        console.log('Current middle value: ' + currentMiddleValue + '.')

        if (target === currentMiddleValue) {
            console.log('Target ' + currentMiddleValue + ' found at index ' + currentMiddleIndex + '.')
            return currentMiddleIndex
        }

        if (target < currentMiddleValue) {
            console.log('Target ' + target + ' is less than current middle value ' + currentMiddleValue + '.')
            console.log('Next, looking within index range ' + startIndex + '-' + (currentMiddleIndex - 1) + '.')
            return binarySearch(startIndex, currentMiddleIndex - 1)
        }

        if (target > currentMiddleValue ) {
            console.log('Target ' + target + ' is greater than current middle value ' + currentMiddleValue + '.')
            console.log('Next, looking within index range ' + (currentMiddleIndex + 1) + '-' + endIndex + '.')
            return binarySearch(currentMiddleIndex + 1, endIndex)
        }
    }

    const index = binarySearch(0, sortedArray.length - 1)
    console.log('Finished searching for value ' + target + '.' + ' Found at index ' + index + '.')
}

findIndex(target, sortedArray)
