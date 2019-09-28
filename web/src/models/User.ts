import { Sync } from "./Sync"
import { Eventing } from "./Eventing"
import { Attributes } from "./Attributes"
import { AxiosResponse } from "axios"

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

  constructor(private attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }

  set(update: UserProps) {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without id')
    }
    this.sync.fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((Response: AxiosResponse): void => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}