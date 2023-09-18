function gemsToDiamond(gems1,gems2,gems3){
    if(typeof gems1!=='number' || typeof gems2!=='number' || typeof gems3!=='number'){
        return 'Please enter a number';
    }

    const diamondOne=gems1*21;
    const diamondTwo=gems2*32;
    const diamondThree=gems3*43;
    const sumOfDiamonds= diamondOne+diamondTwo+diamondThree;
    if(sumOfDiamonds>1000*2){
       const diamonds = sumOfDiamonds-2000;
        return diamonds;
    }
    else{
        return sumOfDiamonds;
    }
}
