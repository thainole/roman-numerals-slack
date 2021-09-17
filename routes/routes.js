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

  const response = (num) => {

    if (typeof (num) === 'number' && !Number.isNaN(num)) {

      try {
        return stringify(num);
      } catch (err) {
        return err.message;
      }

    } else {

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
