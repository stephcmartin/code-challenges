// Create a function that returns all values in an array that aren't' odd.
// Rules
//
// Return all valid numbers (even) in the order they were given.
// vvvvvv this works -only shows the last even in the whole array
// const evenArr = function (array){
//   let newArr = array[0]
//   for (i = 0; i < array.length; i++){
//     if (array[i] % 2 == 0){
//       newArr = array[i]
//     }
//   }
//   return newArr
// }

const evenArr = function(array){
  return array.filter(function(num){
    return num % 2 == 0
  })
}
