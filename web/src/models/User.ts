import { Sync } from "./Sync"
import { Eventing } from "./Eventing"

const RootUrl = 'http://localhost:3000/users'

export interface HasId {
  id?: number
}

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(RootUrl)

  constructor(private data: UserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }



}