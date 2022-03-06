import todosDataBase from "../database/todosDb";
import userDatabase from "../database/userDb";

const verifyTodo = (req, res, next) => {
  try {
    const { todoId, userName } = req.params;
    logger.info(
      `Verifying To-do with todo-id: ${todoId}`
    );
    let todoIndex;
    const todoData = todosDataBase.find((todoInfo, i) => {
      if (todoInfo.id === todoId) {
        todoIndex = i;
      }
      return todoInfo.id === todoId;
    });
    if (!todoData) {
      const m = `No Todo Exist with todo-id: ${todoId}`;
      res.status(404).send(m);
      return;
    }
    if (todoData.owner !== userName) {
      const m = `Todo with given Id ${todoId} does not belong to user ${userName}`;
      res.status(200).send(m);
      return;
    }
    logger.info(`To-do exist with id: ${todoId} and belongs to user ${userName}. Proceedind with delete operation. Index: ${todoIndex}`)
    res.locals.todoIndex = todoIndex;
    next();
  } catch (e) {
    const m = "Error while verifing To-do";
    logger.error(m);
    res.status(500).json(m);
  }
};

export default verifyTodo;
