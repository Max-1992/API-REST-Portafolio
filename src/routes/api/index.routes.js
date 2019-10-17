// Router
const project = require('./project.routes');

const routes = server => {
    server.use('/project', project)
}

module.exports = routes;