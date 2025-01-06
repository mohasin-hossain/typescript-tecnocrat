{
  // Type Guard
  /////////

  // Typeof as typeguard
  ///
  type Alphanumberic = string | number;

  const add = (param1: Alphanumberic, param2: Alphanumberic): Alphanumberic => {
    if (param1 == "number" && param2 == "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  console.log(result1);

  // In Guard
  ///

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`I am Normal User ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr Normal User",
  };

  const adminUser: AdminUser = {
    name: "Mr Admin User",
    role: "admin",
  };

  getUser(normalUser); 
  getUser(adminUser); 

  //
}
