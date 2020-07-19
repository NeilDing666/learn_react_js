/*
slasher

example:
slasher([1, 2, 3], 2) 应该返回 [3].
slasher([1, 2, 3], 0) 应该返回 [1, 2, 3].
slasher([1, 2, 3], 9) 应该返回 [].
slasher([1, 2, 3], 4) 应该返回 [].
slasher(["burgers", "fries", "shake"], 1) 应该返回 ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) 应该返回 ["cheese", 4].
*/

function slasher(arr, howMany) {
    if (arr.length <= howMany){
        return []
    } else {
        return arr.splice(howMany, arr.length)
    }
}

//test
console.log(slasher([1, 2, 3], 2))