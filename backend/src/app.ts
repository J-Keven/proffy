import express from 'express'
import cors from 'cors'
import Routes from './routes'
import logs from './middlewares/LogMiddlewares'

const App = express();

App.use(cors());
App.use(express.json());
App.use(logs);
App.use(Routes);

export default App;
