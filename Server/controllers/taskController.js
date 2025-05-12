import Task from "../model/Task.js";


//Read
const getTasks = async (req, res) => {
    try {
        const { filter } = req.query;
        const query = { user: req.user._id};

        if(filter === 'completed'){
            query.completed = true;
        } else if (filter === 'pending'){
            query.completed = false;
        }

        const tasks = await Task.find(query).sort({ createdAt: -1 });
        res.status(200).json({ message: "Getting all the Tasks", Tasks: tasks.length, tasks})
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message })
    }
};




export { getTasks }
