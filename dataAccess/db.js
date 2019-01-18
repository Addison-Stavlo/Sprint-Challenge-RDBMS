const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//access functions
function addProject(newProject) {
    return db('projects').insert(newProject);
}

function addAction(newAction) {
    return db('actions').insert(newAction);
}

async function getProject(projectID) {
    let project = await db('projects').where({id: projectID});

    let actions = await db('actions').join('projects','projects.id','=','actions.project_id').where({id: projectID});

    return {
        ...project[0],
        actions
    }
}
//exports
module.exports = {
    addProject
}