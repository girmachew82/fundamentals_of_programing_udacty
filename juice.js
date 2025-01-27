let t = 99;
while(t > 0){
    if (t == 1)
        console.log(t +" bottle of juice on the wall!"+t+" " + " bottle of juice! Take one down, pass it around... "+ (t -1)+" bottles of juice on the wall!");
    else if (t == 2)
        console.log(t +" bottle of juice on the wall!"+t+" " + " bottle of juice! Take one down, pass it around... "+ 1 +" bottle of juice on the wall!");
    else    
    console.log(t +" "+ "bottles"+" of juice on the wall!"+t+" " +  " bootles" +" of juice! Take one down, pass it around... "+ (t -1)+" bottles of juice on the wall!");

    t = t-1;
}