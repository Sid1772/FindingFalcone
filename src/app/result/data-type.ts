import { Planets } from "../find-falcone/planet-type";
import { Vehicles } from "../find-falcone/vehicle-type";

export interface Data {
    token:String
    planets:Array<Planets>
    vehicles:Array<Vehicles>
    timeTaken:number
}