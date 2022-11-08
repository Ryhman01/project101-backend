import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Projects = db.define(
	'projects',
	{
		project_name: {
			type: DataTypes.STRING,
		},
		deal_price: {
			type: DataTypes.BIGINT,
		},
		status: {
			type: DataTypes.STRING,
		},
		duration: {
			type: DataTypes.INTEGER,
		},
		worker: {
			type: DataTypes.INTEGER,
		},
	},
	{
		freezeTableName: true,
	}
);

export default Projects;