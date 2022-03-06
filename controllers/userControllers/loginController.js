import userDatabase from "../../database/userDb";

const loginUserController = (req, res) => {
  try {
    const { userName, password } = req.params;
    const userData = userDatabase.filter(
      (userInfo) => userInfo.userName === userName
    );
    const userInformation = userData[0]
    if (!userInformation) {
      const m = `User with user-name ${userName} does not exist`;
      logger.info(m);
      res.status(401).json(m);
      return;
    }

    if (userInformation.password !== password) {
      const m = `Incorrect Password for username ${userName}, ${userData}`;
      logger.info(m);
      res.status(401).json(m);
      return;
    }
    res.status(200).json(userInformation);
  } catch (e) {
    res.status(500).json(e);
  }
};

export default loginUserController;
