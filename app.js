const express = require('express');
const checkListRouter = require('./src/routes/checklist');

const app = express();
// middleware que verifica a existencia de json, e se existir ele coloca no req.body corretamente
app.use(express.json());

app.use('/checklists', checkListRouter);

app.listen(3001, () => {
    console.log('Servidor foi iniciado');
})
/* 

// função log é um middleware | next permite que um middleware passe para outro middleware
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log)

app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas :)</h1>');
})

app.get('/json', (req, res) => {
    res.json({
        title: 'Tarefa X',
        done: true
    })
}) */

