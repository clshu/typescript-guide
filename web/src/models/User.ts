import { Sync } from "./Sync"
import { Eventing } from "./Eventing"
import { Attributes } from "./Attributes"

const RootUrl = 'http://localhost:3000/users'

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(RootUrl)
  public attributes: Attributes<UserProps>

  constructor(private data: UserProps) { }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }

}