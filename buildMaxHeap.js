var unsortedArray = [4,8,5,2,9,10,15,6,1,7,12];

var swapByIndex = function(array, fromIndex, toIndex){
  var a = array[fromIndex];
  var b = array[toIndex];
  var temp = a;
  array[fromIndex] = b;
  array[toIndex] = temp;
}

var leftIndex = function(index) {return 2 * index + 1 }
var rightIndex = function(index) {return 2 * index + 2 }
var parentIndex = function(index) {return (index - 1)/2 }

var findLeft = function(index, array){
  return array[leftIndex(index)];
}

var findRight = function(index, array){
  return array[rightIndex(index)];
}

var findParent = function(index, array){
  return array[parentIndex(index)];
}

var heapMaxify = function(index, array){
  var target = array[index];
  var left = findLeft(index, array);
  var right = findRight(index, array);

  if(!left && !right){
    return; // this case, we are look at the leaf, and leaf is already the biggest.
  }

  if(target > left && target > right){
    return; // this case, the target is in the right place.
  }

  if(target < left && left > right){
    var leftIndexToSwap = leftIndex(index);
    swapByIndex(array, leftIndexToSwap, index);
    heapMaxify(leftIndexToSwap, array);
  }

  if(target < right && right > left){
    var rightIndexToSwap = rightIndex(index);
    swapByIndex(array, rightIndexToSwap, index);
    heapMaxify(rightIndexToSwap, array);
  }
}

var buildMaxHeap = function(array){
  var startIndex = Math.floor((array.length-1))/ 2 - 1 ; // we know that all the leafs has no children, so start from the first node has children

  for(var index = startIndex; index >= 0; index--){
    console.log(index);
    heapMaxify(index, array);
  }

  return array;
}

var sortedArray = buildMaxHeap(unsortedArray);

console.log(sortedArray);