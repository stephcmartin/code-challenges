  // Find the first non-repeating character in a string

function noRepeat (string){
  let num = string.split('');
  for (i = 0; i < string.length; i++) {
    if (num.filter(function(x) {
    return x == string.charAt(i)
    }).length == 1) return string.charAt(i)
  }
}

noRepeat('3', '4', '5', '5')

function firstNonRepeatedCharacter(string) {
    let first = null

    string.split('').some(function (character, index, obj) {
        if(obj.indexOf(character) === obj.lastIndexOf(character)) {
            first = character
            return true
        }
        return false
    })
    return first
}

firstNonRepeatedCharacter('aabcbd')
