import express, {
    Response as ExResponse,
    Request as ExRequest,
    NextFunction,
} from "npm:express";
import { RegisterRoutes } from "../build/routes.ts";

const app = express();
RegisterRoutes(app);
app.use(function errorHandler(
    err: unknown,
    _req: ExRequest,
    res: ExResponse,
    next: NextFunction
): ExResponse {
    if (err instanceof Error) {
        return res.status(404).json({
            message: err.message,
        });
    }
    next();
});
app.listen(8080);
console.log("Deno server listening on :8080");
