/*
confirmEnding
confirmEnding("Bastian", "n") 应该返回 true.
confirmEnding("Connor", "n") 应该返回 false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") 应该返回 false.
confirmEnding("He has to give me a new name", "name") 应该返回 true.
confirmEnding("He has to give me a new name", "me") 应该返回 true.
confirmEnding("He has to give me a new name", "na") 应该返回 false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") 应该返回 false.
 */

function confirmEnding(str, target) {
    let res = false
    //cannot use indexOf()
    let index = str.lastIndexOf(target)
    console.log(index)
    if (index === (str.length - target.length)){
        res = true;
    }
    return res
    //return str.endsWith(target)//ES6
}

//test
console.log(confirmEnding("He has to give me a new name", "me"))