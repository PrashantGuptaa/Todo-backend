import userDatabase from "../database/userDb";

const verifyUserExistence = (req, res, next) => {
    try {
        const { userName } = req.params;
        logger.info(`Verifying User Existence for User: ${userName}`);
        const userData = userDatabase.find(
            (userInfo) => userInfo.userName === userName
          );
          // USer should exist with this user-name
          if (!userData) {
            const m = `No user found for ${userName}`;
            logger.info(m);
            res.status(404).send(m);
            return;
          }
          logger.info(`User exists with username: ${userName}`);
          next();
    } catch (e) {
        const m = `Error while verfiying USer Existence. Reason: ${e.message}`;
        logger.error(m);
        res.status(500).json(m);
    }
}

export default verifyUserExistence;