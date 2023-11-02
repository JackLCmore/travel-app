const { Model, DataTypes} = require("sequelize");

const sequelize =require('../config/connection.js');

class Trips extends Model {}

Traveller.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    trip_budget:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isDecimal: true,
        }
    },
    traveller_amount:{
        type: DataTypes.INTEGER,
        allowNull: false,   
    },
    traveller_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'traveller',
            key: 'id',
        }
    },
    location_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'location',
            key: 'id',
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
}
);

module.exports = Trips;