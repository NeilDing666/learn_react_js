/*
chunk

example:
chunk([1,2,3,4],2)=[[1,2],[3,4]];
chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
chunk(["a", "b", "c", "d"], 2) 应该返回 [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3) 应该返回 [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2) 应该返回 [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4) 应该返回 [[0, 1, 2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5, 6], 3) 应该返回 [[0, 1, 2], [3, 4, 5], [6]].
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) 应该返回 [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
 */

function chunk(arr, size) {
    let res = []
    let num = 0
    for (let i = 0; i < arr.length; i+=size){
        let array = [];
        for (let t = 0; t < size; t++){
            if (arr[num] !== undefined)
                array.push(arr[num])
            num++
        }
        res.push(array)
    }
    return res
}

//test
console.log(chunk([1,2,3,4,5],3))