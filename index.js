import express from 'express';
import { loadEnvFile } from 'node:process';
import productRouter from './routes/product.routes.js';
import { handleError } from './middlewares/handleError.js';
import {config} from 'zod'
import {es} from 'zod/locales'

config(es())

loadEnvFile()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Product API')
})

app.use('/products', productRouter)

app.use(handleError)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})