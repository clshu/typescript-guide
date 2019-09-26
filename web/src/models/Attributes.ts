export class Attributes<T> {
  constructor(private data: T) { }

  // 2 rulse
  // In Typescript, any string can be type
  // In JS(therefor TS), all keys are string

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }
}