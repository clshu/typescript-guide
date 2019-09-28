import { User } from './models/User'

const user = new User({ id: 1, name: 'Hippo', age: 36 })

user.on('save', () => {
  console.log(user)
})
user.save()

