function selectionSort(arr){
    let lowest = 0;
    for(let i = 0; i < arr.length; i++){
        lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([37,45,29,8]))


// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min_index = i;
//         for(let j = i +1; j < arr.length; j++){
//             if(arr[j] < arr[min_index]){
//                 min_index = j;
//             }
//         }
//         if(arr[i] !== arr[min_index]){
//             [arr[i], arr[min_index]] = [arr[min_index], arr[i]]
//         }
//     }

//     return arr;
// }

// console.log(selectionSort([45,37,29,8]))


