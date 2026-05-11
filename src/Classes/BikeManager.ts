import type { Bike } from "./Bike";
import type { Filter } from "../Types/Filter"

export default class BikeManager
{
    private allBikes: Bike[];

    filters: Filter = 
    {
        battery: {min: 0, max: 100},
        id: "",
        model: "any",
        status: "ANY",
    }

    constructor(bikes: Bike[])
    {
        this.allBikes = bikes
    }

    get bikes(): Bike[]
    {
        let bikes: Bike[] = {...this.allBikes}
        return bikes.filter(bike => bike.filter(this.filters))
    }
}