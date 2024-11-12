import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Pauline Kale',
        email: 'pauline@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jack Dupont',
        email: 'jack@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
]

export default users;