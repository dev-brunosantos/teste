import express from 'express';
import { Router } from 'express'

const app = express()
const routes = Router();

const port = 3000

app.use(express.json())
app.use(routes)

routes.get('/', (req, res) => {
    return res.json(
        {
        sucess: true,
        mensagem: 'Sucesso'
    })
})

app.listen(port, ()=> {
    console.log('Servidor rodando')
})