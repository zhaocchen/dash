var array = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];

function bubbleSort(arr) {
    var len = array.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(array);
console.info(array);