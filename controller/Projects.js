import Projects from "../models/ProjectModel.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Projects.findAll();
        res.json(projects);
    } catch (error) {
        console.log(error);
    }
}

export const addProject = async (req, res) => {
    const {projectName, dealPrice, status, duration, worker} = req.body;

    try {
        await Projects.create({
            project_name: projectName,
            deal_price: dealPrice,
            status: status,
            duration: duration,
            worker: worker
        });
        res.json({message: 'Add Project success'});
    } catch (error) {
        console.log(error);
    }
}

