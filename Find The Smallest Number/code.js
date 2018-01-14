// Create a function that takes an array of numbers and returns the smallest number in the set.
const smallest = function(array){
  let smallestNum = array[0]
  for (i = 0; i < array.length; i++){
    for (x = 0; x < array.length; x++){
      if (array[i] < array[x]){
        smallestNum = array[i]
      } else {
        if (array[i] > array[x]){
          smallestNum = array[x]
        }
      }
    }
  }
  return smallestNum
}
