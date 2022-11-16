import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Projects = db.define(
	"projects",
	{
		project_name: {
			type: DataTypes.STRING,
		},
		project_type: {
			type: DataTypes.STRING,
		},
		deal_price: {
			type: DataTypes.BIGINT,
		},
		fee_percentage: {
			type: DataTypes.INTEGER,
		},
		fee_nominal: {
			type: DataTypes.BIGINT,
		},
		tax: {
			type: DataTypes.BIGINT,
		},
		net_profit: {
			type: DataTypes.BIGINT,
		},
		cost_per_month: {
			type: DataTypes.BIGINT,
		},
		cost_per_worker: {
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
