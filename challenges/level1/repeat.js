/*
repeat

example:
repeat("*", 3) 应该返回 "***".
repeat("abc", 3) 应该返回 "abcabcabc".
repeat("abc", 4) 应该返回 "abcabcabcabc".
repeat("abc", 1) 应该返回 "abc".
repeat("*", 8) 应该返回 "********".
repeat("abc", -2) 应该返回 "".
 */

function repeat(str, num) {
    if (num > 0){
        let res = ''
        for (let i = 0; i < num; i++){
            res += str;
        }
        return res;
    } else {
        return ''
    }
}