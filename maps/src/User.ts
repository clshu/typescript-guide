import faker from 'faker';
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string;

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
    this.color = 'red'
  }

  markerContent(): string {
    return `
    <h2>User: ${this.name}<h2>
    `
  }
}