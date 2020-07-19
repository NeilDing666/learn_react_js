/*
mutation

example:
mutation(["hello", "hey"]) 应该返回 false.
mutation(["hello", "Hello"]) 应该返回 true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) 应该返回 true.
mutation(["Mary", "Army"]) 应该返回 true.
mutation(["Mary", "Aarmy"]) 应该返回 true.
mutation(["Alien", "line"]) 应该返回 true.
mutation(["floor", "for"]) 应该返回 true.
mutation(["hello", "neo"]) 应该返回 false.
 */

function mutation(arr) {
    let res = true
    let s1 = [...arr[0].toLowerCase()]
    let s2 = [...arr[1].toLowerCase()]
    console.log(s1)
    console.log(s2)
    for (let i = 0; i < s2.length; i++){
        for (let t = 0; t < s1.length; t++){
            if (s2[i] === s1[t]){
                break
            } else if (t === s1.length-1){
                res = false
            }
        }
    }
    return res
}

//test
console.log(mutation(["hello", "el"]))