import express, { Request, Response, NextFunction } from "express";


const app = express();
app.use("/health", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "hey i am healthy"
    });
})
app.listen(3000, () => {
    console.log("Express Application is working on port 3000")
})