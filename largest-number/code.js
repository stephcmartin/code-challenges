// Create a function that takes an array of numbers. Return the largest number in the array.
//
const largestNumber = function(array){
  let num = array[0]
  for(i = 0; i < array.length; i++){
    for(v = 0; v < array.length; v++){
      if (array[i] > array[v]){
         num = array[i]
      } else {
        if (array[v] > array[i]){
          num = array[v]
        }
      }
    }
  }
  return num
}
