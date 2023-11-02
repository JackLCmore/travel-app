// import models
const Traveler = require('./traveler');
const Location = require('./Location');
const Trip= require('./Trip');




Location.belongsToMany(Traveler, {
  through: "trip",
  foreignKey: 'location_id',
});

Traveler.belongsToMany(Location, {
  through: "trip",
  foreignKey: 'traveler_id',
});



// Export the models with associations
module.exports = {
Traveler,
Location,
Trip
};
