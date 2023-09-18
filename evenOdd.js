function evenOdd(myName){
    if(typeof myName  !== 'string'){
        return 'Please enter a string';
    }
    const lengthOfmyName= myName.length;
    if(lengthOfmyName % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
    
}

