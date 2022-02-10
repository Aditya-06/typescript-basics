// generate fake data
import faker from 'faker';

// Exporting a class therefore Uppercase
export class User {
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
}
