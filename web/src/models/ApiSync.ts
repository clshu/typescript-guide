import Axios, { AxiosPromise } from "axios"

export interface HasId {
  id?: number
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) { }

  fetch(id: number): AxiosPromise {
    return Axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data

    if (id) {
      return Axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return Axios.post(`${this.rootUrl}`, data)
    }
  }
}