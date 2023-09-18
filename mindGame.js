// Problem 1 : Let's Play a mind game
/* 
Description : Step1: Input will be multiplied by 3 then 10 will be added with result. 
Step2: result will be divided by 2 and then 5 will be substracted.
*/

function mindGame(number) {
    if (number < 0) {
        return 'Please enter a positive number';
    }
    const step1 = (number * 3) + 10;
    const step2 = (step1 / 2) - 5;
    return step2;
}


// Problem 2 : Finding even or odd
/* 
Description : Input will contain a string. 
If string length is even, function will return "even" as output 
and if length is odd, function will return "odd" as output 
*/

function evenOdd(myName) {
    if (typeof myName !== 'string') {
        return 'Please enter a string';
    }
    const lengthOfmyName = myName.length;
    if (lengthOfmyName % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }

}


// Problem 3 : Is Less or Greater than seven
/* 
Description : Input will contain a number. 
If the diffrence between the number and 7 is greater than 7, then function will return double of the input. 
And if diffrence is less than 7, then function will return the diffrence. 
*/

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please enter a number';
    }
    const diffrence = number - 7;
    if (diffrence > 7) {
        return number * 2;
    } else {
        return diffrence;
    }
}



// Problem 4 : Finding bad data
/*
Description : Function will return number of negative value from an array.
*/

function findingBadData(data) {
    badData = 0;
    for (let i = 0; i < data.length; i++) {
        const index = i;
        const element = data[index];
        if (element < 0) {
            badData++;
        }
    }
    console.log(badData);
}




// Problem 5 : Convert your gems into diamonds
/*
Description : Input contain 3 number of gems.
To convert the number of gems into diamond,
first numbers of gems will multiplied by 21, second will be multiplied by 32 and third will multiplied by 43.
If the summution of total diamonds is greater than 1000*2 then 2000 will be substracted.
Else function will return summution of diamonds.
*/

function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number') {
        return 'Please enter a number';
    }

    const diamondOne = gems1 * 21;
    const diamondTwo = gems2 * 32;
    const diamondThree = gems3 * 43;
    const sumOfDiamonds = diamondOne + diamondTwo + diamondThree;
    if (sumOfDiamonds > 1000 * 2) {
        const diamonds = sumOfDiamonds - 2000;
        return diamonds;
    } else {
        return sumOfDiamonds;
    }
}