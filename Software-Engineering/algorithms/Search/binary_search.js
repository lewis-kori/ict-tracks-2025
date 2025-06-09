function binarySearch(arr, target){
    let right = arr.length -1;
    let left = 0;

    while(left <= right){
        var mid = Math.floor((right+left)/2);

        if(arr[mid] < target){
            left = mid+1;
        }else if (arr[mid] > target){
            right = mid -1;
        }else{
            return mid;
        }
    }
    return -1;
}
console.log(binarySearch([3, 5, 7, 67, 89], 67))