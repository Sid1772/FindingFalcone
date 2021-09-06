import { Planets } from "../../game/find-falcone/planet-type";
import { Vehicles } from "../../game/find-falcone/vehicle-type";

export interface Data {
    token:String
    planets:Array<Planets>
    vehicles:Array<Vehicles>
    timeTaken:number
}