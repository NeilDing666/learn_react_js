/*
Example input: Hello
Example output: olleH
 */

function reverseString(str) {
    let stringArray = [];
    let s = '';

    //use for ... of ... to transform str into array
    for (let i of str){
        stringArray.push(i);
    }

    //use array.reverse(), this function will change the original array.
    stringArray.reverse();

    //use array.map() or array.forEach() to get every item
    stringArray.map(item=>s += item);
    //stringArray.forEach(item=>s+=item);

    return s;
}

//test
console.log(reverseString("Hello"))
