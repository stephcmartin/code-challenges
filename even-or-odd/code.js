const check = function(num){
  if (num % 2 == 0) {
    console.log('it is even')
  } else {
  console.log('it is odd')
  }
}

// or

function oddNumbers(l, r) {
let num = Math.floor(Math.random() * (r - l)) + r
 if(num % 2 != 0){
  return num
 }
}
