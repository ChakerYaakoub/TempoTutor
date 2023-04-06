const router = require("express").Router();
const bodyParser = require("body-parser");
const { isAuthenticatedPayment, makePayment , invoiceByid } = require("../Controllers/PaymentsControllers");


router.post(
  "/payments/:id",
  bodyParser.json(),
  isAuthenticatedPayment,
  makePayment

);

router.get(
  "/invoice/:id",
  // isAuthenticatedPayment,
  invoiceByid

);



module.exports = router;