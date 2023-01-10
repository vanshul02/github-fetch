import * as express from 'express';
import * as controller from '../controllers/controller';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/user/:userName/repos', controller.getRepos);
app.get('/user/:userName', controller.getUser);

app.use('/', (req, res) => {
  return res.status(404).json('Invalid URL');
});

app.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
