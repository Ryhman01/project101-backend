import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Prices = db.define(
	'prices',
	{
		min_price: {
			type: DataTypes.BIGINT,
		},
		max_price: {
			type: DataTypes.BIGINT,
		},
		percentage: {
			type: DataTypes.INTEGER,
		},
	},
	{ freezeTableName: true }
);

export default Prices;
