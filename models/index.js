const { Model } = require('sequelize/types');
const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips')
// Travellers have many locations, and locations have many travellers through trips (many-to-many association).

// Traveller.hasMany(Location, {
//     foreignKey: 'traveller_id',
//     onDelete: 'CASCADE'
// });

// Location.hasMany(Traveller, {
//     foreignKey: 'location_id',
//     onDelete: 'CASCADE'
// })

Location.belongsToMany(Traveller, { through: {Model: Trips, unique: false} });

Traveller.belongsToMany(Location, { through: {Model: Trips, unique: false} });

module.exports = { Location, Traveller, Trips }


