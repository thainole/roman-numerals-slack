const { Router } = require('express');
const { parse, stringify } = require('roman-numerals-tn');
const packageJson = require('../package.json');

const router = Router();

const { name, version } = packageJson;

const helpMessage = 'Type a roman numeral (ex. XII) to parse it or a number (ex. 15) to make it a roman numeral.';


// ------------------------ROUTES---------------------------------

router.get('/', (req, res) => res.json({ name, version }));


router.post('/', (req, res) => {

  const { text } = req.body;

  // eslint-disable-next-line consistent-return
  const response = (num) => {

    if (typeof (Number(num)) === 'number' && !Number.isNaN(num)) {

      try {
        return stringify(Number(num));
      } catch (err) {
        return err.message;
      }

    } else if (typeof (num) === 'string') {

      try {
        if (num === 'help') {
          return helpMessage;
        } else if (num === 'version') {
          return { name, version };
        } else {
          return parse(num);
        }
      } catch (err) {
        return err.message;
      }

    }
  };

  res.json({
    response_type: 'in_channel',
    text: response(text)
  });

});

module.exports = router;
