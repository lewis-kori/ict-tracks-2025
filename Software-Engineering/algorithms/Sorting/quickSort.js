function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivot(arr, start=0, end=arr.length-1){
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i <= end; i++){
        
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, i, swapIdx)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        //left
        quickSort(arr, left, right= pivotIdx-1)
        //right
        quickSort(arr, left = pivotIdx +1, right)
    }
    return arr;
}

console.log(quickSort([2,5,3,4,1,6]))
