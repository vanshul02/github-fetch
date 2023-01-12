import * as express from 'express';
import * as cors from 'cors';
import * as controller from '../controllers/controller';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/user/:userName/repos', controller.getRepos);
app.get('/user/:userName', controller.getUser);
app.get('/health', (req, res) => {
  return res.status(200).json('STATUS UP');
});

app.use('/', (req, res) => {
  return res.status(404).json('Invalid URL');
});

app.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
