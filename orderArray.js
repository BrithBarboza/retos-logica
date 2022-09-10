function numberSort(arrayNumber) {
    let newArray = [...arrayNumber];

    let dataLen = newArray.length;
    for (let i = 0; i < dataLen; i++) {
        for (let j = 0; j < dataLen; j++) {
            if (newArray[j] > newArray[j + 1]) {
                let nextElement = newArray[j + 1];
                newArray[j + 1] = newArray[j];
                newArray[j] = nextElement;
            }
        }
    }
    return newArray;
}
console.log(numberSort([10, 2, 0, 5, 4, 3, 0, 1]));