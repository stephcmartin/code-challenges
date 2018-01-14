// Given an array of integers between 1 and 1,000,000. One integer is in the array twice.
// Find the duplicate.

// function findDuplicate(num){
// 	let find = num.sort()
//   	for (i = 0; i < nums.length; i++){
//   		if (((0 >= find[i]) || (find[i] >= 1000000)) || (find[i] %1 !== 0) || (Number.isInteger(find[i]) === false)) {
// 		return('this function can only take integers from 1 to 1,000,000');
// 		} else {
//   		if (find[i] === find[i+1]){
//     		return(find[i]);
//     	}
//   		}
//   	}
// }

function findDuplicate(num){
  let find = num.sort()
  for(i = 0; i < num.length; i++){
    if (find[i] ===find[i+1]){
      return find[i]
    }
  }
}

findDuplicate([2,5,6,6,9, 34, 99, 'blue'])
