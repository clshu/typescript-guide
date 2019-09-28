import { User } from './models/User'

const user = new User({ name: 'fox', age: 2 })

console.log(user.get('name'))
user.on('change', () => {
  console.log('User changed')
})
user.set({ name: 'Bob' })
console.log(user.get('name'))

