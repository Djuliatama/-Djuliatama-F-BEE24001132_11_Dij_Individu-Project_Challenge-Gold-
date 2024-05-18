const itemsService = require("../items/itemsService");
const Service = new itemsService();

const getItems = async (req, res) => {
    try {
        res.status(200).json(await Service.getItems());
    }
    catch (err) {
        console.error(err);
        return res.status(500).send ('Internal Server Error');
    }
};

const addItem = async (req, res) => {
    const { name, price } = req.body;

    try {
        res.status(201).json (await Service.addItem ({name, price}));
    }
    catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        let status = await Service.deletedItemById(id);
        res.status(200).send (`Item deleted by ID: ${id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send ('Internal Server Error');
    }
};

const editItemById = async (req, res) => {
    const { id } = req.params;
    const { name, price} = req.body;

    try {
        let status = await Service.editItemById (id, {
            name,
            price,
        });
        res.status(200).send(`Item edited with ID: ${id}`);
    }
    catch (err) {
        console.error(err);
        return res.status(500).send (`Internal Server Error`);
    }
};

const searchItemByKeyword = async (req, res) => {
    const { keyword } = req.query.keyword;
    try {
        const items = await Service.searchItemByKeyword(keyword);
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        return res.status(404).send('Item not found');
    }
};



module.exports = {
    addItem,
    getItems,
    deleteItem,
    searchItemByKeyword,
    editItemById,
};