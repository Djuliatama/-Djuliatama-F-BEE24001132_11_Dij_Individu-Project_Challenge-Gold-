const Items = require("./items");
const db = require('../db');
// const items = require("./items");

// const { models } = require('../sequelize/models/items.model')

// const { models } = require('../sequelize');

class ItemsService {
  
      async getItems() {
          //  const result= await db.query('SELECT * FROM public.items');
         //  return result.rows;
        const items = await models.items.findAll();
        return items
      };

    async addItem (body) {
        // const result = await db.query('INSERT INTO items (item_id, item_name, item_price, item_description, created_at, updated_at) VALUES (DEFAULT, $1, $2, $3, $4 CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',  [name, price])
        // return result.rows;
        await models.items.create(body)
      }
    
    async deletedItemById(id) {
        // const result = await db.query ('DELETE FROM items WHERE item_id = $1', [id])
        await models.items.destroy({
         where: {item_id:id}
        })
      }   

    async searchItemByKeyword(keyword) {
       await models.items.findOne ({
        where: {
          keyword: keyword
        }
       })
    } 
         // const result = await db.query('SELECT * FROM items WHERE name ILIKE $1', [`%${keyword}%`]);
        // console.log("found items: ", result.rows);
        // return result.rows;

    //  const project = await Project.findOne({ where: { title: 'My Title' } });

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
