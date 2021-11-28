//rutas de las flores
const express = require('express');
const router = express.Router();
const controlFlowers = require('../controllers/control-flores');

// api/pflores
router.post('/', controlFlowers.addFlower)
router.get('/', controlFlowers.getFlowers)
router.put('/:id', controlFlowers.modifyFlower)
router.get('/:id', controlFlowers.getFlower)
router.delete('/:id', controlFlowers.deleteFlower)

module.exports = router;