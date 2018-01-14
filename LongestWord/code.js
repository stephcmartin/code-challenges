// Using the JavaScript language, have the function LongestWord(sen)
// take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
let string = sen.match(/[a-z0-9]+/gi);
let sortedString = string.sort(function(a,b){
    return b.length - a.length
})
return sortedString[0]
}
// length of longest word
function LongestWordLength(things){
  let secondString = things.split(' ')
  let max = 0
  for (i = 0; i < secondString.length; i++){
    if (secondString[i].length > max){
      max = secondString[i].length;
    }
    return max
  }
}
