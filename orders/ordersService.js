const Orders = require("./orders");
const db = require('../db');


class OrdersService {

    async getOrders() {
        const result= await db.query('SELECT * FROM public.orders');
        return result.rows;
    }

    async addOrder ({name, user_id, item_id, quantity, order_description, status}) {
        const result = await db.query('INSERT INTO orders (order_id, user_id, item_id, item_quantity, order_description, order_status, created_at, updated_at) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *', [name, user_id, item_id, quantity, order_description, status]);
        return result.rows;
    }

    async updateOrder( id, { user_id, item_id, item_quantity, order_description, order_status }) {
        const result = await db.query('UPDATE orders SET user_id = $1, item_id = $2, item_quantity = $3, order_description = $4, order_status = $5, updated_at = CURRENT_TIMESTAMP WHERE order_id = $6 RETURNING *', [user_id, item_id, item_quantity, order_description, order_status, id]);
        return result.rows;
    }

    async deletedOrderById(id) {
        const result = await db.query('DELETE FROM orders WHERE item_id = $1', [id])
    }   

}
module.exports = OrdersService