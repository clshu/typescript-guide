import { User } from './models/User'

// const user = new User({})
// user.set({ name: 'Bobby', age: 99 })

// user.on('change', () => {
//   console.log('change #1')
// })
// user.on('change', () => {
//   console.log('change #2')
// })
// user.on('save', () => {
//   console.log('save #1')
// })
// console.log(user)

// user.trigger('change')
// user.trigger('save')

const user1 = new User({ id: 2, name: "Bobby Flayer", age: 20 })
user1.save()