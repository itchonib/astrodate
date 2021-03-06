const router = require('express').Router(),
  {
    getCountry,
    getCity,
    getState
  } = require('../../controllers/apiCalls/locationControllers');

router.get('/country', getCountry);
router.get('/state/:id', getState);
router.get('/city/:id', getCity);

module.exports = router;
