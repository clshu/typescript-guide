// import { UserList } from "./views/UserList"
// import { Collection } from "./models/Collection"
// import { UserProps, RootUrl, User } from "./models/User"

// const users = new Collection<User, UserProps>(
//   RootUrl,
//   (json: UserProps) => {
//     return User.buildUser(json)
//   }
// )

// users.on('change', () => {
//   const root = document.getElementById('root')

//   if (root) {
//     const list = new UserList(root, users)
//     list.render()
//   } else {
//     console.log('No Root')
//   }
//   console.log(users)
// })

// users.fetch()
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
