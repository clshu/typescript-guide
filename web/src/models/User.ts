import { Model } from "./Model"
import { Eventing } from "./Eventing"
import { ApiSync } from "./ApiSync"
import { Attributes } from "./Attributes"
import { Collection } from "./Collection"

export const RootUrl = 'http://localhost:3000/users'

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

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      RootUrl,
      (json: UserProps) => User.buildUser(json)
    )
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}