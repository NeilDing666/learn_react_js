/*
where

example:
where([10, 20, 30, 40, 50], 35) 应该返回 3.
where([10, 20, 30, 40, 50], 30) 应该返回 2.
where([40, 60], 50) 应该返回 1.
where([3, 10, 5], 3) 应该返回 0.
where([5, 3, 20, 3], 5) 应该返回 2.
where([2, 20, 10], 19) 应该返回 2.
where([2, 5, 10], 15) 应该返回 3.
 */

function where(arr, num) {
    arr.push(num)
    arr.sort((a, b) => a-b)
    return arr.indexOf(num)
}

//test
console.log(where([2, 20, 10], 19))