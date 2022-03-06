import todosDataBase from "../../database/todosDb";

const markCompleteTodo = (req, res) => {
  try {
    const { userName, todoId } = req.params;
    logger.info(
      `Marking to-do complete with id: ${todoId} for user; ${userName}`
    );
    for (const todoData of todosDataBase) {
      const { id, owner } = todoData;
      if (id === todoId) {
        if (userName !== owner) {
          const m = `To-do with id: ${todoId} does not belong to user: ${userName}`;
          logger.info(m);
          res.status(200).json(m);
        } else {
          logger.info(`Marking To-Do Complete in Database`);
          todoData.completed = true;
          logger.info(
            `Successfully marked to-do complete with todo-id: ${todoId}`
          );
          res.status(200).json({ message: "Success" });
          return;
        }
      }
    }
    const m = `No To-Do exist with given id: ${todoId}`;
    logger.info(m);
    res.status(200).json({ message: m });
  } catch (e) {
    const m = ` Error while marking to-do as Complete. Reason: ${e.message}`;
    logger.error(m);
    res.status(500).json(m);
  }
};

export default markCompleteTodo;
