import todosDataBase from "../../database/todosDb";

const deleteTodo = (req, res) => {
    try {
        const todoIndex  = res.locals?.todoIndex;
        logger.info(`Deleting To-Do with Id: ${todoIndex}`);
        todosDataBase.splice(todoIndex, 1);
        logger.info(`Deleted To-Do with Id: ${todoIndex}`);
        res.status(200).json({ message: 'Success' });
    } catch (e) {
        const m =  ` Error while Deleting To-Do. Reason: ${e.message}`
        logger.error(m);
        res.status(500).json(m);
    }
}

export default deleteTodo;