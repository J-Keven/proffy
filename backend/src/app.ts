import express from 'express'
import Routes from './routes'

const App = express();

App.use(express.json());
App.use(Routes)

export default App;
