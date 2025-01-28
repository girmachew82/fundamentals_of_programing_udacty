let l = ""
function laugh(num){
    for(let n = 0; n < num; n = n+1){
            l += "ha";
    }
    return l +"!";
}

console.log(laugh(0))
console.log(laugh(3))
console.log(laugh(5))
console.log(laugh(8))