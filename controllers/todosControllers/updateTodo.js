import todosDataBase from "../../database/todosDb";

const updateTodo = (req, res) => {
    try {
        const { userName } = req.params;
        const todoData = res.locals?.todoData || {};
        const todoId = todoData.id;
        for (let [index, todoInformation] of todosDataBase.entries()) {
            const { id, owner } = todoInformation;
            if (id === todoData.id) {
              if (userName !== owner) {
                const m = `To-do with id: ${todoId} does not belong to user: ${userName}`;
                logger.info(m);
                res.status(200).json(m);
              } else {
                logger.info(`Updating To-Do  in Database`);
                todosDataBase[index] = { ...todoInformation, ...todoData };
                console.log(todoInformation);
                logger.info(
                  `Successfully updated to-do with todo-id: ${todoId}`
                );
                res.status(200).json({ message: "Success" });
                return;
              }
            }
          }
          const m = `No To-Do exist with to-do id: ${todoId}`;
          logger.info(m);
          res.status(200).json(m);
    } catch (e) {
        const m =  `Error while updating to-do. Reason: ${e.message}`
        logger.error(m);
        res.status(500).json(m);
    }
}

export default updateTodo;