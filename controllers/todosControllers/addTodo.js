import userDatabase from "../../database/userDb";
import { v4 } from "uuid";
import todosDataBase from "../../database/todosDb";

const addTodo = (req, res) => {
  try {
    const { userName } = req.params;
    const userData = userDatabase.find(
      (userInfo) => userInfo.userName === userName
    );
    const { name, description, startDate, targetDate } = req.body;

    // Checking if all mandatory fields are present
    if (!(name && description && startDate && targetDate)) {
      const m = "Fields missing";
      logger.info(m);
      res.status(200).send(m);
      return;
    }

    // USer should exist with this user-name
    if (!userData) {
      const m = `No user found for ${userName}`;
      logger.info(m);
      res.status(404).send(m);
      return;
    }

    const obj = {
      id: v4(),
      name,
      description,
      startDate,
      targetDate,
      completed: false,
      deleted: false,
      owner: userName,
    };
    todosDataBase.push(obj);
    res.status(200).json(obj);
  } catch (e) {
    const m = `Error while . Reason: ${e.message}`;
    logger.error(m);
    res.status(500).json(m);
  }
};

export default addTodo;
