// Imports
const Project = require('../models/project.models');


const saveProject = async(dataProject) => {
    try {
        const project = new Project(dataProject);
        const newProject = await project.save();
        return newProject;
    } catch (err) {
        return Promise.reject(err);
    }
}


const getAllProjects = async() => {
    try {
        const allProjects = await Project.find().sort({ year: 'desc' });
        return allProjects;
    } catch (err) {
        return Promise.reject(err);
    }
}


const getProject = async(id) => {
    try {
        const project = await Project.findById(id);
        return project;
    } catch (err) {
        return Promise.reject(err);
    }

}


const updateProject = async(id, update) => {
    try {
        const project = await Project.findByIdAndUpdate(id, update, { new: true });
        return project;
    } catch (err) {
        return Promise.reject(err);
    }
}


const deleteProject = async(id) => {
    try {
        const projectDeleted = await Project.findByIdAndDelete(id);
        return projectDeleted;
    } catch (err) {
        return Promise.reject(err);
    }
}


module.exports = {
    add: saveProject,
    list: getAllProjects,
    get: getProject,
    update: updateProject,
    delete: deleteProject,
}