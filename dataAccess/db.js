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

function getProjects() {
    return db('projects');
}

async function getProject(projectID) {
    let project = await db('projects').select('id','name','description','complete').where({id: projectID});

    if(project[0].complete === 0){
        project[0].complete = false
    }
    else{
        project[0].complete = true
    }

    let actions = await db('actions').join('projects','projects.id','=','actions.project_id').select('actions.id','actions.task','actions.notes').where({'projects.id': projectID});

    return {
        ...project[0],
        actions
    }
}
//exports
module.exports = {
    addProject,
    addAction,
    getProjects,
    getProject
}