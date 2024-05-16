const ordersService = require("../orders/ordersService");
const Service = new ordersService();

const getOrders = async (req, res) => {
    try {
        res.status(200).json(await Service.getOrders());
    }
    catch (err) {
        console.error(err);
        return res.status(500).send ('Internal Server Error');
    }
};

const addOrder = async (req, res) => {
    const { name, user_id, item_id, quantity, order_description, status} = req.body;

    try {
        res.status(201).json (await Service.addItem ({name, user_id, item_id, quantity, order_description, status}));
    }
    catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await Service.updateOrder(id, req.body));
    }
    catch(err) {
        return res.status(500).send('Internal Server Error');
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        let status = await Service.deletedOrderById(id);
        res.status(200).send (`Item deleted by ID: ${id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send ('Internal Server Error');
    }
};


module.exports = {
    getOrders,
    addOrder,
    updateOrder,
    deleteOrder,
};