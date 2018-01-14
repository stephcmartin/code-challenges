// Finding the Most Frequently Occurring Number
// Given an array of numbers, find the most recurrent number.
// For example, given [1, 2, 3, 4, 3], your algorithm should return 3,
// as it has the highest level of recurrence.
// For ties, return the first found more recurrent number.

const mostOccuring = function (array){
  let result = array[0]
  let tmpNumber = 0
  for(i = 0; i< array.length; i++){
    let count = 0
    for(v = 0; v < array.length; v++){
      if(array[i]===array[v]){
        count++
      }
      if(count>tmpNumber){
        tmpNumber = count
        result = array[i]
      }
    }
}
  return result
}
