/*
palindrome:
return true or false based on the given str is palindrome or not
Note: you need delete any space and symbol and transform into small letters
 */

function palindrome(str) {
    let res = true;
    str = transformSmallLetters(deleteSymbol(str));
    //why mid?
    let mid = str.length/2;
    for (let i = 0; i < mid; i++){
        //why str.length-1?
        if (str[i] !== str[str.length-1-i]){
            res = false;
        }
    }
    return res;
}

function deleteSymbol(str) {
    //regular expression RE
    const letterPattern = /[a-zA-Z]+/g
    //
    str = str.match(letterPattern).reduce((x, y) => x + y)
    return str
}

function transformSmallLetters(str){
    return str.toLowerCase()
}

//test
//console.log(palindrome(transformSmallLetters(deleteSymbol("213ASDBasgfsxc#@$^TH"))));
//console.log(palindrome("abceyecba"))


