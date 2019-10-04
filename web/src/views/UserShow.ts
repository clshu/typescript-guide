import { View } from "./view";
import { User, UserProps } from "../models/User";


export class UserShow extends View<User, UserProps>{
  template(): string {
    return `
    <div>
      <h1>User Details</h1>
      <div>Name: ${this.model.get('name')}</div>
      <div>Age: ${this.model.get('age')}</div>
    </div>
  `
  }
}