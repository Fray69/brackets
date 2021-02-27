module.exports = function check(str, bracketsConfig) {
    let open = [];
    let close = [];
    let brack = [];
    let pairsofbrack = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
            pairsofbrack.push(bracketsConfig[i][0]);
        } else {
            open.push(bracketsConfig[i][0]);
            close.push(bracketsConfig[i][1]);
        }
    }
    
    console.log(open);
      
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        console.log(brack);
        if (open.includes(str[i])) {
            brack.push(str[i]);  
            
        } else if (close.includes(str[i])) {
            if (brack[brack.length-1] == open[close.indexOf(str[i])]) {
                brack.pop();     
            } else {
                return false;
            }
        } else if (pairsofbrack.includes(str[i])) {
            if (brack[brack.length-1] == str[i]){
                brack.pop();
            } else if (!brack.includes(str[i])) {
                brack.push(str[i]);
            } else {
                return false;
            }
            
        } 
    }
    
    if (brack.length != 0) {
        return false;
    }
    return true;
}
