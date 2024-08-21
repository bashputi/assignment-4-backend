import express, {NextFunction, Request, Response} from 'express';
const app = express()


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Wrold')
})

export default app;

// route not found error 
app.use((req, res, next) => {
  res.json({
    success:false,
    message: "Route not found"
  });
});

// internal server error 
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.json({
    success: false,
    message: "An internal server error occurred.",
    err: err.message
  })
});
