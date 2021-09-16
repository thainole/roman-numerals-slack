import { express } from 'express';

const app = express();

// Middlewares
// For post and put request bc of the data we send
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initializing server
const server = app.listen(process.env.PORT, () => {
  console.log('app listening on port', process.env.PORT);
});

export {
  app, server
};
