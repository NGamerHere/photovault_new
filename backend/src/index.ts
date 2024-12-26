import express,{Express,Request,Response} from 'express';
import Testing from "./routes/Testing";
import dotenv from 'dotenv';
dotenv.config();

const app:Express = express();
app.use(Testing);

const port:number = 3000;

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});