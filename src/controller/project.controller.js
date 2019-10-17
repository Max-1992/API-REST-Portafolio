// Imports
const services = require('../services/project.services')


const saveProject = async(req, res) => {

    try {
        const project = req.body;
        const newProject = await services.add(project);

        return res.status(201).json({
            ok: true,
            project: newProject
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    };
}

const getAllProjects = async(req, res) => {

    try {
        const allProjects = await services.list();

        return res.status(200).json({
            ok: true,
            projects: allProjects
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    };
}


const getProject = async(req, res) => {

    try {
        const { id } = req.params;
        const project = await services.get(id);

        if (!project) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: `No existe un recurso con el ID ${id}`
                }
            });
        };

        return res.status(200).json({
            ok: true,
            project
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
}


const updateProject = async(req, res) => {

    try {
        const { id } = req.params;
        const body = req.body;

        const project = await services.update(id, body);

        if (!project) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: `No existe un recurso con el ID ${id}`
                }
            });
        }

        return res.status(200).json({
            ok: true,
            updateProject: project
        })

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        })
    }

}

const deleteProject = async(req, res) => {

    try {
        const { id } = req.params;
        // const projectDeleted = await Project.deleteOne({ _id: id });
        const projectDeleted = await services.delete(id);

        if (!projectDeleted) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: `No existe un recurso con el ID ${id}`
                }
            });
        }

        return res.status(200).json({
            ok: true,
            deleted: {
                message: `Se a eliminado el siguiente regitro ${id}`,
                projectDeleted
            }

        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        })
    }
}


module.exports = {
    saveProject,
    getAllProjects,
    getProject,
    updateProject,
    deleteProject,
}