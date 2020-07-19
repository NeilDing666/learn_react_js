/*
largestOfFour

example:
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 应该返回一个数组
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 应该返回 [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 应该返回 [9, 35, 97, 1000000].
 */

function largestOfFour(arr) {
    let res = []
    arr.forEach(item => {
        let biggestNum = 0
        item.forEach(x =>{
            if (x > biggestNum){
                biggestNum = x
            }
        })
        res.push(biggestNum)
    })
    return res
}

//test
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))