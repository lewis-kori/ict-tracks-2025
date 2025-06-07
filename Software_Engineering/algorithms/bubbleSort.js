function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
       let swapped = false
       console.log(`i --> ${i}`)
       console.log(`unsorted array ${arr}`)
        for(let j = 0; j < i-1; j++){
            //console.log(arr)
            //console.log(`j+1 is ${j+1}`)
          //  console.log(arr)
            if(arr[j] > arr[j+1]){
                //console.log(`swapping values ${arr[j]} and ${arr[j+1]}`)
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                
               swapped = true;
            }
        }
       console.log(arr);
        console.log("------------");
       // if(!swapped) break;
    }
    return arr;
   
  }

console.log(bubbleSort([5,4,9,2,6]))



// function bubbleSort(arr){

//     for(let i = arr.length -1; i > 0; i--){
//         // let swapped = false;
//         console.log(`i --> ${i}`)
//         for(let j = 0; j < i; j++){
//             console.log(arr)
//             if(arr[j] > arr[j+1]){
//                console.log(`swapping values ${arr[j]} and ${arr[j+1]}`)
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//                 //swapped= true;
//             }
            
//         }
//         console.log(arr);
//         console.log("------------")
//         // if(!swapped) break;
//     }

//     return arr;

// }

// console.log(bubbleSort([5,4,9,6]))