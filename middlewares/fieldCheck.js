
const fieldCheck = (req, res, next) => {
    try {
        logger.info(`Verifying Todo field existence`);
        const { name, description, startDate, targetDate, todoId } = req.body;
        const { userName } = req.params;

        // Checking if all mandatory fields are present
        if (!(name && description && startDate && targetDate)) {
          const m = "Fields missing";
          logger.info(m);
          res.status(200).send(m);
          return;
        };

          logger.info(`All fields existed`);

          const obj = {
              id: todoId,
            name,
            description,
            startDate,
            targetDate,
            completed: false,
            deleted: false,
            owner: userName,
          };
          res.locals.todoData = obj;
          next();
    } catch (e) {
        const m = `Error while verfiying Fields. Reason: ${e.message}`;
        logger.error(m);
        res.status(500).json(m);
    }
}

export default fieldCheck;