import todosDataBase from "../../database/todosDb";

const getAllTodos = (req, res) => {
  try {
    const { userName } = req.params;
    const userTodos = todosDataBase.filter((todos) => todos.owner === userName);
    res.status(200).json(userTodos);
  } catch (e) {
    const m = `Error while fetching Todos. Reason: ${e.message}`;
    logger.error(m);
    res.status(500).json(m);
  }
};

export default getAllTodos;
