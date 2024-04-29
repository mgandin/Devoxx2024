import express, { Request, Response } from "express";


const app = express();
app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World in Bun !')
})
app.listen(8080);
console.log("server listening on :8080");
