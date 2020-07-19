/*
find Longest Word from a sentence
return value should be a number

example:
findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回 6.
findLongestWord("May the force be with you") 应该返回 5.
findLongestWord("Google do a barrel roll") 应该返回 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") 应该返回 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") 应该返回 19.
 */

function findLongestWord(str) {
    let strArray = str.split(' ');
    let res = 0;
    strArray.forEach(item => {
        if (item.length > res){
            res = item.length;
        }
    });
    return res;
}


//test
//console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));