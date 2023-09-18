function findingBadData(data){
    badData=0;
    for(let i=0;i<data.length;i++){
        const index=i;
        const element=data[index];
        if(element<0){
            badData++;
        }
    }
    console.log(badData);
}

