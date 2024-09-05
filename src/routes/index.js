const router = require('express').Router();
const controllers = require('../controllers')

router.post('/validateNubank', controllers.nubankController)
router.post('/validateMercadoPago', controllers.mercadoPagoController)
router.post('/validatePicPay', controllers.picPayController)
router.post('/validateBradesco', controllers.bradescoController)
router.post('/validateBancoDoBrasil', controllers.bancoDoBrasilController)
router.post('/validateSantander', controllers.santanderController)

module.exports = router
