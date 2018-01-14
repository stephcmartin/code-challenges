// Find the two numbers that add up to certain sum

  function add(x, y, z){
    if (x + y == z){
      return (x, y)
  } else {
    return false
  }
  }

// Given an array of integers and a target sum,
// return every pair of integers that add up to the target sum.

let arr = [10,20,10,40,50,60,70],
    target = 50

let total = (array, sum) => {
  let result = []
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === sum - array[i]){
        result.push([array[i], array[j]])
      }
    }
  }
  return result
}

total(arr, target)
