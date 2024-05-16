let sportOne: string[] = ["goft", "cricket", "tennis", "Swimming"];


// for (let i = 0; i < sportOne.length; i++){
//     console.log(sportOne[i]);
// }

// simplified for loop

for (let tempSport of sportOne){
    if (tempSport == "cricket"){
        console.log(tempSport + " << my favorite")
    }
    else {
        console.log(tempSport);
    }
}