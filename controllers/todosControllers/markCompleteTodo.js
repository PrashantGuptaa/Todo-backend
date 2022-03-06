const markCompleteTodo = (req, res) => {
    try {
        
    } catch (e) {
        const m =  ` Error while . Reason: ${e.message}`
        logger.error(m);
        res.status(500).json(m);
    }
}

export default markCompleteTodo;