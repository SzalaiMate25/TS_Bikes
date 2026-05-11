import type { BikeStatus } from "./BikeStatus"

export interface Filter
{
    battery: {min: number, max: number}
    id: string
    model: string
    status: BikeStatus | "ANY"
}