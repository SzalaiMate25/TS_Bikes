import type { BikeStatus } from "../Types/BikeStatus";
import type { Filter } from "../Types/Filter";

export class Bike {
    public id: string;
    public model: string;
    public batteryLevel: number;
    public status: BikeStatus;
    public location: [number,number];

    constructor (
        id:string,
        model:string,
        batteryLevel: number,
        status: BikeStatus,
        location: [number,number]
    ){
        this.id = id;
        this.model = model;
        this.batteryLevel = batteryLevel;
        this.status = status;
        this.location = location
    }

    filter(filter: Filter): boolean
    {
        if (this.batteryLevel < filter.battery.min || this.batteryLevel > filter.battery.max)
            return false
        if (filter.model != "any" && filter.model.toLowerCase() != this.model.toLowerCase())
            return false
        if (!this.id.toLowerCase().includes(filter.id.toLowerCase()))
            return false
        if (filter.status != "ANY" && filter.status != this.status)
            return false

        return true
    }
}