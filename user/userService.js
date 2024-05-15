const User = require("./user");
const db = require('../db');

class UserService {
   
  async getUsers() {
   const result= await db.query('SELECT * FROM public.user');
   return result.rows;
  }
  
  async getUserById(id) {
    const result = await db.query('SELECT * FROM users WHERE user_id =$1', [id])
    return result.rows;
    // return user ??
  }

  async addUser ({name, email, username, password}) {
    const result = await db.query('INSERT INTO users (user_id, user_email, user_username, user_password, created_at, updated_at) VALUES (DEFAULT, $1, $2, $3, $4 CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',  [name, email, username, password])
    return result.rows;
  }

  async deletedUserById(id) {
    const result = await db.query ('DELETE FROM users WHERE user_id = $1', [id])
    // return result.rows ??
}

  async editUserById(id, {name, email, username, password}) {
    const result = await db.query ('UPDATE users SET user_name = $1, user_email = $2, user_username = $3, user_password = $4 WHERE user_id = $5', [name, email, username, password, id])
  }
  
  }  

//      async getUsers() {
//       // console.log("get all users");
//       // return this.users;
//       try {
//         const result = await db.query('SELECT * FROM public.user');
//         // console.log(result);
//         return result.rows;
//       } catch (err) {
//         console.error(err);
//         // return res.status(500).send('Internal Server Error');
//       }
//     } 
// //     Database connect
// //     app.get('/', async (req, res) => {
  
// // });

//     getUserById(id) {
//     const user = this.users.find(user => user.id == id);
//     return user || null;
//     }

//     addUser({ name, email, username, password }) {
//     const id = this.users.length + 1;
//     const user = new User(id, name, email, username, password);
//     this.users.push(user);
//     console.log("add: ", user.id, user.name);
//     return true;
//     }

//     editUserById(id, { name, email, username, password }) {
//         console.log("edit: ", id);
//         const user = this.getUserById(id);
//         if (!user) {
//            console.log("User not found");
//           return false;
//         }
//         user.name = name;
//         user.email = email;
//         user.username = username;
//         user.password = password;
//         console.log("edited: ", user);
//         return true;
//       }

//     deletedUserById(id) {
//         console.log("delete", id);
//         const initialLength = this.users.length;
//         this.users = this.users.filter((user) => user.id != id);
//         const isDeleted = this.users.length < initialLength;
//         if (isDeleted) {
//             console.log("User deleted succesfully");
//             return isDeleted;
//         } else {
//             console.log("Failed to delete user. User not found.");
//         }
//     }
// }

    module.exports = UserService;
