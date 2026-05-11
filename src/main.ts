import '../assets/css/style.css';
import { Bike } from './Classes/Bike';

const initialData : Bike[] = [
    new Bike("B01","CityRide",80,"ELÉRHETŐ",[47.49,19.04]),
    new Bike("B02","MountainBike",12,"ELÉRHETŐ",[47.5,19.05]),
    new Bike("B03","CityRide",55,"KARBANTATÁS",[47.48,19.06]),
];

console.log(initialData);
