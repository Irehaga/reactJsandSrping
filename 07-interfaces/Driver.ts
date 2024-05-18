import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GoftCoach } from "./GoftCoach";


let myCricketCoach = new CricketCoach();

let myGoftCoatch = new GoftCoach();


// declare an array for coaches ... initially an empty array.
let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGoftCoatch);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkOut());
}