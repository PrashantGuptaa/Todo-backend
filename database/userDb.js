import { v4 as uuid } from 'uuid';

const userId1 = uuid();
const userId2 = uuid();
const userId3 = uuid();
export const userName1 = 'Unique1';
export const userName2 = 'Unique2';
export const userName3 = 'Unique3';

const userDatabase = [
    {
        userId: userId1,
        firstName: 'Rahul',
        lastName: 'SHS',
        dob: Date.now(),
        userName: userName1,
        email: 'email2@domain.com',
        password: 'hashedpass2'
    },
    {
        userId: userId2,
        firstName: 'PINKU',
        lastName: 'Singhania',
        dob: Date.now(),
        email: 'email3@domain.com',
        userName: userName2,
        password: 'hashedpass1'
    },
    {
        userId: userId3,
        firstName: 'Prashant',
        lastName: 'Gupta',
        dob: Date.now(),
        userName: userName3,
        email: 'email1@domain.com',
        password: 'hashedpass3'
    }
];

export default userDatabase;