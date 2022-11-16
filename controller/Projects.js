import Prices from '../models/PriceModel.js';
import Projects from '../models/ProjectModel.js';

export const getProjects = async (req, res) => {
	try {
		const projects = await Projects.findAll();
		res.json(projects);
	} catch (error) {
		console.log(error);
	}
};

export const addProject = async (req, res) => {
	const { projectName, projectType, dealPrice, status, duration, worker } = req.body;
	let percent = 0;
	let fee = 0;
	let tax = 0;
	let netProfit = 0;
	let costPerMonth = 0;
	let costPerWorker = 0;

	try {
		const response = await Prices.findAll({
			attributes: ['min_price', 'max_price', 'percentage'],
		});
		response.forEach((e) => {
			if (dealPrice >= e.min_price && dealPrice <= e.max_price) {
				// Projects.create({
				// 	project_name: projectName,
				// 	deal_price: dealPrice,
				// 	fee: e.percentage,
				// 	status: status,
				// 	duration: duration,
				// 	worker: worker,
				// });
				percent = e.percentage
			}
		});

		tax = Math.floor(dealPrice * (11 / 100));
		fee = Math.floor(dealPrice * (percent / 100));
		netProfit = Math.floor(dealPrice - tax - fee);
		costPerMonth = Math.floor(netProfit / duration);
		costPerWorker = Math.floor(costPerMonth / worker);

		await Projects.create({
			project_name: projectName,
			project_type: projectType,
			deal_price: dealPrice,
			tax: tax,
			fee_percentage: percent,
			fee_nominal: fee,
			net_profit: netProfit,
			cost_per_month: costPerMonth,
			cost_per_worker: costPerWorker,
			worker: worker,
			duration: duration
		})
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	}
};

export const getProjectById = async (req, res) => {
	try {
		const project = await Projects.findOne({
			where: (P = {
				id: req.params.id,
			}),
		});
		res.status(200).json(project);
	} catch (error) {
		console.log(error);
	}
};

export const updateProject = async (req, res) => {
	try {
		await Projects.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	}
};

export const deleteProject = async (req, res) => {
	try {
		await Projects.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	}
};

export const projectCounter = async (req, res) => {
	try {
		const response = await Projects.findAndCountAll({
			where: {
				status: req.body.status,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		console.log(error);
	}
};
