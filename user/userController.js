const userService = require("../user/userService");

const Service = new userService();

const getUsers = async (req, res) => {
    try {
        res.status(200).json(await Service.getUsers());
    }
    catch (err) {
        console.error(err);
        return res.status(500).send ('Internal Server Error');
    }
};

const getUserById = async (req, res) => {
    const { id } =req.params;
    try {
        res.status(200).json(await Service.getUserById(Id))
    }
    catch (err) { 
        console.error(err);
        return res.status(404).send ('User not found');
    }

};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        let status = await Service.deletedUserById(id);
        res.status(200).send (`User deleted by ID: ${id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send ('Internal Server Error');
    }
};

const editUserById = async (req, res) => {
    const { id } = req.params;
    const { name, email, username, password} = req.body;

    try {
        let status = await Service.editUserById (id, {
            name,
            email,
            username,
            password
        });
        res.status(200).send(`User edited with ID: ${id}`);
    }
    catch (err) {
        console.error(err);
        return res.status(500).send (`Internal Server Error`);
    }
};


module.exports = {
    getUsers,
    deleteUser,
    getUserById,
    editUserById,
};