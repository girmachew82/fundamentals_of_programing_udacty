function revese_string(reverseMe){
    let reversed = "";
    for(let i = reverseMe.length - 1; i >= 0; i--){
        reversed += reverseMe[i];
    }
    return reversed;
}