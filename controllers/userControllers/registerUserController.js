import { v4 as uuid } from 'uuid';
import userDatabase from '../../database/userDb';

const registerNewUserController = (req, res) => {
    try {
        const userData = req.body;
        const { userName, password, email, firstName, lastName, dob } = userData;
        if(!(userName && password && email && firstName && lastName && dob)) {
            logger.info("Field missing");
            res.status(400).json(`Field missing`);
            return;
        }
        const data = userDatabase.find(user => user.userName === userName);
        if(data) {
            const m = `User with username ${userName} already exists.`;
            logger.info(m);
            res.status(200).json(m);
            return;
        }
    
        const updatedUserData = {
            userId: uuid(),
            ...userData
        };
        userDatabase.push(updatedUserData);
        logger.info(`Successfully created user ${userName}`);
        res.status(200).json(updatedUserData);
    } catch (e) {
        logger.error(e.message);
        res.status(500).json(e);
    }
};

export default registerNewUserController;