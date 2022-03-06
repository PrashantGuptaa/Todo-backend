import { v4 } from "uuid";
import todosDataBase from "../../database/todosDb";

const addTodo = (req, res) => {
  try {
    const { userName } = req.params;
    const todoData = res.locals?.todoData || {};

    logger.info(`Adding Todo for username: ${userName}`);
    todosDataBase.push({ ...todoData, id: v4() });
    logger.info(`Successfully Added Todo for username: ${userName}`);
    res.status(200).json(todoData);
  } catch (e) {
    const m = `Error while adding Todo. Reason: ${e.message}`;
    logger.error(m);
    res.status(500).json(m);
  }
};

export default addTodo;
