const Items = require("./items");
const db = require('../db');
// const items = require("./items");

// const { models } = require('../sequelize/models/items.model')

// const { models } = require('../sequelize');

class ItemsService {
  
      async getItems() {
        const items = await models.items.findAll();
           return items
      };


    // async getItems() {
    //     const result= await db.query('SELECT * FROM public.items');
    //     return result.rows;
    //    }

      //  async function getAll(req, res) {
      //   const instruments = await models.instrument.findAll();
      //   res.status(200).json(instruments);
      // };

    async addItem ({name, price}) {
        const result = await db.query('INSERT INTO items (item_id, item_name, item_price, item_description, created_at, updated_at) VALUES (DEFAULT, $1, $2, $3, $4 CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',  [name, price])
        return result.rows;
      }
    
    async deletedItemById(id) {
        const result = await db.query ('DELETE FROM items WHERE item_id = $1', [id])
      }   

    async searchItem(keyword) {
        const result = await db.query('SELECT * FROM items WHERE name ILIKE $1', [`%${keyword}%`]);
        console.log("found items: ", result.rows);
        return result.rows;
     }

    async editItemById(id, {name,price}) {
        const result = await db.query ('UPDATE items SET item_name = $1, item_price = $2 WHERE user_id = $3', [name, price, id])
        return result.rows;
     }

    // async getItemsById(id) {
    //     const result = await db.query('SELECT * FROM items WHERE item_id =$1', [id])
    //     return result.rows;
    //  }

}

module.exports = ItemsService
