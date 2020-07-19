/*
rot13

example:
rot13("SERR PBQR PNZC") 应该解码为 "FREE CODE CAMP"
rot13("SERR CVMMN!") 应该解码为 "FREE PIZZA!"
rot13("SERR YBIR?") 应该解码为 "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") 应该解码为 "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
 */

function rot13(str) {
    str = [...str]
    let res = ''
    str.forEach(item => {
        if (item.charCodeAt(item) <= 90 && item.charCodeAt(item) >= 65){
            res += String.fromCharCode((item.charCodeAt(item) - 52)% 26 + 65)
        } else {
            res += item
        }
    })
    return res
}

//test
console.log(rot13("AB SERR PBQR PNZC"))