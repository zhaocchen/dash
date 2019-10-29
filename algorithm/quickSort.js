function quickSort(arr, start, end) {
    if (start >= end) {
        return arr;
    }
    var key = arr[0];
    var arrL = [];
    var arrR = [];
    for (var i = start + 1; i <= end; i++) {
        arr[i] <= key ? arrL.push(arr[i]) : arrR.push(arr[i]);
    }
    arrL.push(key);
    return quickSort(arrL, 0, arrL.length - 1).concat(quickSort(arrR, 0, arrR.length - 1));
}

var array = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
console.info(quickSort(array, 0, array.length - 1));