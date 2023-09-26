import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Wenjun",
    email: "wenjun@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Cassia",
    email: "cassia@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Vera",
    email: "vera@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];
export default users;
