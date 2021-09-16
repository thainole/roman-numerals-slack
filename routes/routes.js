import { express } from 'express';
import { parse, stringify } from 'roman-numerals-tn';
import packageJson from '../package.json';

const app = express();

const { name, version } = packageJson;

app.get('/', (req, res) => res.json({ name, version }));

app.post('/', (req, res) => {
  //
});
