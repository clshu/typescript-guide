import { User } from './models/User'

const user = new User({ name: 'fox', age: 2 })

user.get('name')
user.on('change', () => {
  console.log('change #1')
})
user.trigger('change')

