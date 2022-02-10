// generate fake data
import faker from 'faker';

// Exporting a class therefore Uppercase
export class Company {
  // properties of the user
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    // faker returns lat/lng as strings therefore we parse float
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h3>Company: ${this.companyName}</h3>
    <p>${this.catchPhrase}</p>
    `;
  }
}
