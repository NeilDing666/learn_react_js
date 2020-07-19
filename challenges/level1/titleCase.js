/*
titleCase

example:
titleCase("I'm a little tea pot") 应该返回一个字符串
titleCase("I'm a little tea pot") 应该返回 "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") 应该返回 "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 应该返回 "Here Is My Handle Here Is My Spout".
 */

function titleCase(str) {
    str = str.toLowerCase();
    let strArray = str.split(' ');
    let res = '';
    strArray.forEach(item => {
        let s = item[0].toUpperCase() + item.slice(1,item.length) + " "
        res += s;
    })
    res = res.substring(0, res.length - 1);
    return res;
}

//test
//console.log(titleCase("sHoRt AnD sToUt"))