import express, {Application, Request, Response} from 'express'
import "reflect-metadata"

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});


export default app;