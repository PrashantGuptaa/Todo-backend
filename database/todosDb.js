
import { userName1, userName2, userName3 } from './userDb';
import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();
const id4 = v4();
const id5 = v4();
const id6 = v4();
const id7 = v4();
const id8 = v4();
const id9 = v4();
const id10 = v4();
const id11 = v4();

const todosDataBase = [
    {
        id: id1,
        name: 'My-Todo-1',
        description: 'To-do-Description-1',
        targetDate: '12-10-2022',
        startDate: Date.now(),
        owner: userName1,
        deleted: false,
        completed: false,
    },
    {
        id: id2,
        name: 'My-Todo-2',
        description: 'To-do-Description-2',
        targetDate: '11-11-2022',
        startDate: Date.now(),
        owner: userName2,
        deleted: false,
        completed: false,
    },
    {
        id: id3,
        name: 'My-Todo-3',
        description: 'To-do-Description-3',
        targetDate: '22-10-2032',
        startDate: Date.now(),
        owner: userName1,
        deleted: false,
        completed: false,
    },
    {
        id: id4,
        name: 'My-Todo-4',
        description: 'To-do-Description-4',
        targetDate: '62-05-2022',
        startDate: Date.now(),
        owner: userName3,
        deleted: false,
        completed: false,
    },
    {
        id: id5,
        name: 'My-Todo-5',
        description: 'To-do-Description-5',
        targetDate: '12-10-2022',
        startDate: Date.now(),
        owner: userName2,
        deleted: false,
        completed: false,
    },
    {
        id: id6,
        name: 'My-Todo-6',
        description: 'To-do-Description-6',
        targetDate: '19-12-2024',
        startDate: Date.now(),
        owner: userName3,
        deleted: false,
        completed: false,
    },
    {
        id: id7,
        name: 'My-Todo-7',
        description: 'To-do-Description-7',
        targetDate: '12-10-2022',
        startDate: Date.now(),
        owner: userName3,
        deleted: false,
        completed: false,
    },
    {
        id: id8,
        name: 'My-Todo-8',
        description: 'To-do-Description-8',
        targetDate: '19-01-2026',
        startDate: Date.now(),
        owner: userName3,
        deleted: false,
        completed: false,
    },
    {
        id: id9,
        name: 'My-Todo-9',
        description: 'To-do-Description-9',
        targetDate: '16-10-2023',
        startDate: Date.now(),
        owner: userName1,
        deleted: false,
        completed: false,
    },
    {
        id: id10,
        name: 'My-Todo-10',
        description: 'To-do-Description-10',
        targetDate: '12-10-2022',
        startDate: Date.now(),
        owner: userName3,
        deleted: false,
        completed: false,
    },
    {
        id: id11,
        name: 'My-Todo-11',
        description: 'To-do-Description-11',
        targetDate: '12-10-2022',
        startDate: Date.now(),
        owner: userName2,
        deleted: false,
        completed: false,
    },
];

export default todosDataBase;