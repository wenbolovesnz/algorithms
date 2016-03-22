//simple merge sort without error handling.
var unsortedArray = [2, 4, 6, 1, 5, 9];

var merge = function(array1, array2){

    mergedArray = [];
    while(array1.length !== 0 && array2.length !==0){

        if(array1[0] > array2[0]){
            var smallerFrom2 = array2.shift();
            mergedArray.push(smallerFrom2);

        }else if(array1[0] < array2[0]){
            var smallerFrom1 = array1.shift();
            mergedArray.push(smallerFrom1);
        }else{

        }
    }

    if(array1.length === 0){
        mergedArray = mergedArray.concat(array2)
    }else{
        mergedArray = mergedArray.concat(array1)
    }

    return mergedArray;
};

function sort(array) {

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
        return array;
    }

    return merge(sort(left), sort(right));

}

var a = sort(unsortedArray);
console.log(a);
