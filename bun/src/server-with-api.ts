import express, { NextFunction, Request, Response } from "express";


import { RegisterRoutes } from "./generated/routes";

const app = express();

RegisterRoutes(app);
app.use(function errorHandler(
    err: unknown,
    _req: Request,
    res: Response,
    next: NextFunction
): Response | void {
    if (err instanceof Error) {
        return res.status(404).json({
            message: err.message,
        });
    }
    next();
});
app.listen(8080);
console.log("Bun server listening on :8080");
