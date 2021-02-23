//My solution
function arrayChunk(array, size) {
    // if (array.length < size) return array;
    let chunkArray = [];
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        newArr.push(array[index]);
        if ((index + 1) % size == 0) {
            chunkArray.push(newArr);
            newArr = [];
        }
    }
    if (newArr.length) {
        chunkArray.push(newArr);
    }

    return chunkArray;
}

//alternative solution
function arrayChunk(array, size) {
    const chunked = [];
    let index = 0;
    const arraySize = array.length;

    while (index < arraySize) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;

}


console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
