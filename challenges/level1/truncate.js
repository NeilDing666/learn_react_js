/*
truncate

example:
truncate("A-", 1) 应该返回 "A...".
truncate("Absolutely Longer", 2) 应该返回 "Ab...".
truncate("A-tisket a-tasket A green and yellow basket", 11) 应该返回 "A-tisket...".
truncate("Peter Piper picked a peck of pickled peppers", 14) 应该返回 "Peter Piper...".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 应该返回 "A-tisket a-tasket A green and yellow basket".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 应该返回 "A-tisket a-tasket A green and yellow basket".
 */

function truncate(str, num) {
    if (str.length > num){
        if (num > 3){
            str = str.slice(0, num-3) + "..."
        } else {
            str = str.slice(0, num) + "..."
        }
    } else {
        console.log("str is too short!")
    }
    return str
}

//test
console.log(truncate("A-", 2))