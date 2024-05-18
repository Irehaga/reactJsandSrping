"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GoftCoach_1 = require("./GoftCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGoftCoatch = new GoftCoach_1.GoftCoach();
// declare an array for coaches ... initially an empty array.
let theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGoftCoatch);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkOut());
}
