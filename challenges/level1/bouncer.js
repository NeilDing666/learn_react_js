/*
bouncer

example:
bouncer([7, "ate", "", false, 9]) 应该返回 [7, "ate", 9].
bouncer(["a", "b", "c"]) 应该返回 ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) 应该返回 [].
bouncer([1, null, NaN, 2, undefined]) 应该返回 [1, 2].
 */

function bouncer(arr) {
    return arr.filter(item => item && item !== NaN)
}

//test
console.log(bouncer([7, "ate", "", false, 9]))