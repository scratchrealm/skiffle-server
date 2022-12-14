import express, { Express, Request, Response } from 'express';

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from skiffle-server')
})

app.listen(port, () => {
    return console.log(`[server]: Server is running on ${port}`)
})