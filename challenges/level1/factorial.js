/*
n!
5! = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorial(n) {
    // init res, cannot be 0
    let res = 1;
    //loop should start from 1 rather than 0, also should end with <=n rather than <n
    for (let i = 1; i <= n; i++){
        res *= i;
    }

    return res;
}

//test
//console.log(factorial(5));