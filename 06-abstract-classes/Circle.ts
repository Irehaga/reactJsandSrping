
import { Shape } from "./Shape";


export class Circle extends Shape {

    calculateArea(): number {

        return Math.PI * Math.pow(this.radius, 2);

    }


    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }


    public set radius(value: number){
        this._radius = value;
    }

    public get radius(): number {
        return this._radius;
    }


    getInfo(): string {

        return super.getInfo() + `, radius=${this._radius}`;
    }


}
