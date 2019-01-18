const express = require('express');
const db = require('../dataAccess/db.js');
const server = express();

//middleware
server.use(express.json());

//routes
server.get('/', (req, res) => {
    res.status(200).send('API Up and Running...  GO CATCH IT!');
});

server.get('/api/projects', async (req,res) => {
    try{
        let projects = await db.getProjects();
        res.status(200).json(projects)
    }
    catch(err){
        res.status(500).json(err)
    }
})

server.get('/api/projects/:id', async (req,res) => {
    try{
        let project = await db.getProject(req.params.id);
        res.status(200).json(project);
    }
    catch(err){
        res.status(500).json(err);
    }
})

server.get('/api/projects/:id/actions', async (req,res) => {
    try{
        let actions = await db.getActions(req.params.id);
        res.status(200).json(actions);
    }
    catch(err){
        res.status(500).json(err);
    }
})

server.post('/api/projects', async (req, res) => {
    try{
        let ids = await db.addProject(req.body);
        res.status(201).json(ids)
    }
    catch(err){
        res.status(500).json(err);
    }
});

server.post('/api/projects/:id/actions', async (req,res) => {
    try{
        let ids = await db.addAction(req.body,req.params.id);
        res.status(201).json(ids)
    }
    catch(err){
        res.status(500).json(err);
    }
})

server.put('/api/projects/:id', async (req,res) => {
    try{
        let count = await db.updateProject(req.body,req.params.id);
        res.status(200).json(count);
    }
    catch(err){
        res.status(500).json(err);
    }
})

server.put('/api/projects/:projectid/actions/:id', async (req,res) => {
    try{
        let count = await db.updateAction(req.body,req.params.id);
        res.status(200).json(count);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

server.delete('/api/projects/:id', async (req,res) => {
    try{
        let count = await db.removeProject(req.params.id);
        res.status(200).json(count);
    }
    catch(err){
        res.status(500).json(err);
    }
});

server.delete('/api/projects/:projectid/actions/:id', async (req,res) => {
    try{
        let count = await db.removeAction(req.params.id);
        res.status(200).json(count);
    }
    catch(err){
        res.status(500).json(err);
    }
})
//exports
module.exports = server;