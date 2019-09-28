import { Model } from "./Model"
import { Eventing } from "./Eventing"
import { ApiSync } from "./ApiSync"
import { Attributes } from "./Attributes"

const RootUrl = 'http://localhost:3000/users'

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(
      new Attributes<UserProps>(attr),
      new Eventing(),
      new ApiSync<UserProps>(RootUrl)
    )
  }

}