import express  from 'express';
import getAllTodos from './../controllers/todosControllers/getAllTodos';
import addTodo from './../controllers/todosControllers/addTodo';
import deleteTodo from '../controllers/todosControllers/deleteTodo';
import markCompleteTodo from './../controllers/todosControllers/markCompleteTodo';
import verifyTodo from './../middlewares/verifyTodo';
import verifyUserExistence from '../middlewares/verfiyUserExistence';
import updateTodo from './../controllers/todosControllers/updateTodo';
import fieldCheck from './../middlewares/fieldCheck';

const todoRoutes = express.Router();

todoRoutes.get('/fetchAllTodos/:userName', verifyUserExistence, getAllTodos);
todoRoutes.post('/addTodo/:userName',verifyUserExistence, fieldCheck, addTodo);
todoRoutes.delete('/deleteTodo/:userName/:todoId', verifyUserExistence, verifyTodo, deleteTodo);
todoRoutes.patch('/markCompleteTodo/:userName/:todoId', verifyUserExistence, markCompleteTodo);
todoRoutes.patch('/updateTodo/:userName', verifyUserExistence, fieldCheck, updateTodo);

export default todoRoutes;