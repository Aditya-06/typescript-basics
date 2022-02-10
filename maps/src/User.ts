// generate fake data
import faker from 'faker';
import { LocationObject } from './CustomMap';

// Exporting a class therefore Uppercase
// If we do not want errors while calling, we can implement it in class defination
// this will point any mismatch/error in the interfacce and the class in the class file itself
export class User implements LocationObject {
  // properties of the user
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();

    // faker returns lat/lng as strings therefore we parse float
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h3>User: ${this.name}</h3>
    `;
  }
}
