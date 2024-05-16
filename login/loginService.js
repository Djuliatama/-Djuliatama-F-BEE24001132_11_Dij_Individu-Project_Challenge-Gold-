const userService = require("../user/userService");
const Service = new userService();

class LoginService {
  async checkLogin(username, password) {
    try {
      const users = await Service.getUsers();
      
      for (let user of users) {
        if (username === user.username && password === user.password) {
          return true;
        }
      }
    } catch (err) {
      console.error('Error fetching users:', error);
      return false;
    }
  }
}


module.exports = LoginService;

//     console.log(Service.getUsers())
//     let userDB = Service.getUsers()
//     for (let i = 0; i < userDB.length; i++) {
//         if(username === userDB[i].username && password === userDB[i].password){
//             return true
//         }
//     }
//   }
// }

//sebelumnya pakai code for (let i = 0; i < userDB.length; i++) 
//  if(username === userDB[i].username && password === userDB[i].password)
