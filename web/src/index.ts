import { Collection } from './models/Collection'
import { RootUrl } from "./models/User"
const collection = new Collection(RootUrl)

collection.on('change', () => {
  console.log(collection)
})
collection.fetch()

