// Imports
const { Router } = require('express');
const router = Router();


// Controllers
const controller = require('../../controller/project.controller');


router.get('/', controller.getAllProjects); // Retornar todos los proyectos.

router.get('/:id', controller.getProject); // Retornar un proyecto especifico.

router.post('/', controller.saveProject); // Crear un proyecto.

router.put('/:id', controller.updateProject) // Actualiza un proyecto.

router.delete('/:id', controller.deleteProject) // Eliminar un proyecto.

router.delete('/:id', controller.deleteProject) // Eliminar un proyecto.


module.exports = router;