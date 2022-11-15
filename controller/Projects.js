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
	const { projectName, dealPrice, status, duration, worker } = req.body;
	let percent = 0;

	try {
		const response = await Prices.findAll({
			attributes: ['min_price', 'max_price', 'percentage'],
		});
		response.forEach((e) => {
			if (dealPrice >= e.min_price && dealPrice <= e.max_price) {
				Projects.create({
					project_name: projectName,
					deal_price: dealPrice,
					fee: e.percentage,
					status: status,
					duration: duration,
					worker: worker,
				});
			}
		});

		res.json({ message: 'Add Project success', fee: percent });
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
