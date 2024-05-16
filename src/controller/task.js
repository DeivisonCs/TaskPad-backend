const services = require("../services/task")

function add(req, res) {
    services.add(req.body)
        .then((task) => 
            res.status(201).send({
                message: "Tarefa criada!",
                tarefa: task
            }), 
        (error) => res.status(400).send({message: error}))
}

function list(req, res) {
    services.list()
        .then((task) => res.status(200).send({tarefas: task}), 
        (error) => res.status(400).send({message: error}))
}

function remove(req, res) {
    services.remove(req.params.id)
        .then((task) => 
            res.status(200).send({
                message: task?"Tarefa removida com sucesso!":"Tarefa não encontrada!"
            }),
    (error) => res.status(400).send({message: error}))
}

function update(req, res) {
    // return res.status(200).send({teste:req.params.id})
    services.update(req.body, req.params.id)
        .then((task) => 
            res.status(200).send({
                message: task?"Tarefa atualizada!":"Tarefa não encontrada!"
            }),
    (error) => res.status(400).send({message: error}))
}

module.exports = {add, list, remove, update}