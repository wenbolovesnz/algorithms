//simple insertionSort without error handling.

var unsortedArray = [2,4,6,1,3,7,1,6,5];

var swap = function(array, index){
	var a = array[index];
	var b = array[index - 1];
	var temp = a;
	array[index] = b;
	array[index-1] = temp;		
}

var recursiveSwap = function(array, index){
	if(index === 0){
		return true; //done
	}
	
	if(array[index] >= array[index-1]){
		return true; // done as well
	}
	
	swap(array, index);	
	recursiveSwap(array, index -1);	
}

var insertionSort = function(array){
	
	for(var i = 1; i < array.length; i++){	
		if(array[i] < array[i-1]){
			recursiveSwap(array, i);																
		}		
	}		
	
	return array;
}

var sortedArray = insertionSort(unsortedArray);

console.log(sortedArray);