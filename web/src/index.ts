import { Collection } from './models/Collection'
import { RootUrl, User, UserProps } from "./models/User"
const collection = new Collection<User, UserProps>(
  RootUrl,
  (json: UserProps) => User.buildUser(json)
)

collection.on('change', () => {
  console.log(collection)
})
collection.fetch()

