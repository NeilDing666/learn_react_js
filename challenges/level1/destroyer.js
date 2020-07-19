/*
destroyer

example:
destroyer([1, 2, 3, 1, 2, 3], 2, 3) 应该返回 [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) 应该返回 [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) 应该返回 [1].
destroyer([2, 3, 2, 3], 2, 3) 应该返回 [].
destroyer(["tree", "hamburger", 53], "tree", 53) 应该返回 ["hamburger"].
 */

function destroyer(arr) {
    if (arguments.length === 1){
        return arr
    } else {
        for (let i = 1; i < arguments.length; i++){
            arguments[0] = arguments[0].filter(item => item !== arguments[i])
        }
    }
    return arguments[0]
}

//test
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))