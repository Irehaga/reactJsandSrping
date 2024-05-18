import { Coach } from "./Coach";

export class GoftCoach implements Coach {
    getDailyWorkOut(): string {
        
        return "Hit 100 balls at the golf range.";
    }
    
}