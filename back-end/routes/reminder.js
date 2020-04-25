const router = require('express')();
let Reminder = require('../models/reminder.model');

router.route('/add').post((req,res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newReminder = new Reminder({
    username,
    description,
    duration,
    date,
  });

  console.log(newReminder);

  newReminder.save()
    .then(() =>res.json('Reminder Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
  Reminder.findById(req.params.id)
    .then(reminder => res.json(reminder))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req,res) => {
  Reminder.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Reminder.findById(req.params.id)
    .then(reminder => {
      reminder.username = req.body.username;
      reminder.description = req.body.description;
      reminder.duration = Number(req.body.duration);
      reminder.date = Date.parse(req.body.date);

      reminder.save()
        .then(() => res.json('Exercise Updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
