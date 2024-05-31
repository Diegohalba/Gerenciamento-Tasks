const express = require("express");
const { request } = require("https");

const allTodos = [{title: "", status: false}];
const router = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/tasks", async (request, response) => {
    const {title, description} = request.body;
    const task = await prisma.task.create({
        data: {
            title,
            description,
        },
    });
    return response.status(201).json(task)
})

router.get("/tasks", async (request, response) => {
    const tasks = await prisma.task.findMany()
    return response.status(200).json(tasks)
})

router.put("/tasks", async (request, response) => {
    const {title, description, id, status} = request.body
    
    if(!id){
        return response.status(400).json("Id é obrigatório")
    }

    const taskAlreadyExist = await prisma.task.findUnique({where: { id } });

    if(!taskAlreadyExist){
        return response.status(404).json("Task não existe");
    }

    const task = await prisma.task.update({
        where: {
            id, 
        },
        data: {
            title,
            description,
            status,
        },
    });

    return response.status(200).json(task);
});

router.delete("/tasks/:id", async (request, response) => {
    const { id } = request.params;

    const intId = parseInt(id);

    if(!intId){
        return response.status(400).json("Id é obrigatório")
    }

    const taskAlreadyExist = await prisma.task.findUnique({where: { id: intId } });

    if(!taskAlreadyExist){
        return response.status(404).json("Task não existe");
    }   

    await prisma.task.delete({where: { id: intId } });
    return response.status(200).send();
});

module.exports = router; 