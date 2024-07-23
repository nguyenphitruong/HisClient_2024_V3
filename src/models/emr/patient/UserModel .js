class UserModel {
    constructor(name = '', email = '') {
      this.name = name;
      this.email = email;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setEmail(email) {
      this.email = email;
    }
  }
  
  export default UserModel;