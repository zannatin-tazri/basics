function isLGSeven(number){
    if(typeof number!=='number'){
        return 'Please enter a number'; 
    }
    const diffrence=number-7;
    if(diffrence>7){
        return number*2;
    }
    else{
        return diffrence;
    }
}
