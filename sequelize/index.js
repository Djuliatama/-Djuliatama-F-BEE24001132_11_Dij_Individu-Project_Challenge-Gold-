// // const { Sequelize } = require('sequelize');

// // const sequelize = new Sequelize('buatchallenge', 'postgres', 'Takoyaki99', {
// //   host: 'localhost',
// //   dialect: 'postgres',
// // });

// //models filenya 
// const modelDefiners = [
// 	require('./models/user.model'),
// 	require('./models/orders.model'),
// 	require('./models/items.model'),
// ];

// for (const modelDefiner of modelDefiners) {
// 	modelDefiner(sequelize);
// }

// //kode test koneksi database
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();


// module.exports = sequelize;