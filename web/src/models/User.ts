import Axios, { AxiosResponse } from "axios"
import { Eventing } from "./Eventing"

const URL = 'http://localhost:3000'
const MODEL = 'users'

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events = new Eventing()

  constructor(private data: UserProps) { }

  private restURL(host: string, model: string, param?: any): string {
    return `${host}/${model}/${param}`
  }
  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }


  fetch(): void {
    Axios.get(this.restURL(URL, MODEL, this.get('id')))
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }

  save(): void {
    if (this.get('id')) {
      Axios.put(this.restURL(URL, MODEL, this.get('id')), this.data)
    } else {
      Axios.post(this.restURL(URL, MODEL, ''), this.data)
    }
  }
}