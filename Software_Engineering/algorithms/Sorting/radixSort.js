//Radix sort is a special type of sorting algortithm that works on a list of numbers
//it is mostly used for binary numbers but can also work on base 10 numbers
// it never makes comparisons between elements -unlike the other sorting algortithms that we habeen working with
// it exploits the fact that information about the size of a number is encoded in the number of digits -> more digits mean a bigger number

`we use three helper methods in radix sort
    1. getDigit(num, place) --> returns the digit in num at the given place value
    2. digitCount(num) --> gives us the number of digits in num
    3. mostDigits(nums) --> given an array of numbers(nums), returns the number of digits in the largest numbers in the list`


function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits; 
}


function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
   
    for(let i = 0; i < maxDigitCount; i++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let k = 0; k < nums.length; k++){
            digitBuckets[getDigit(nums[k], i)].push(nums[k])
            console.log(digitBuckets)
        }
        nums = [].concat(...digitBuckets)

    }

    return nums;

}



