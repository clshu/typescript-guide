import { User } from './models/User'

const user = new User({})
user.set({ name: 'Bobby', age: 99 })


user.events.on('change', () => {
  console.log('change #1')
})
// user.on('change', () => {
//   console.log('change #2')
// })
// user.on('save', () => {
//   console.log('save #1')
// })
// console.log(user)

user.events.trigger('change')
console.log(user)
// user.trigger('save')

