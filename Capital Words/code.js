//Challenge
//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter
// being passed and capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str) {
    let string = str.split(' ')
    for (i =0; i< string.length; i++){
        string[i] = string[i].substring(0,1).toUpperCase() + string[i].substring(1)
    }
    return string.join(' ')
}

// IN CSS:
// p:first-letter {
//   text-transform:capitalize;
// }
