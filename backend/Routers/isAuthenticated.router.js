const router = require("express").Router();
const {
  returnFirstNameifAuthenticated,
} = require("../Controllers/UserAuthenticatioStatus");
router.get("/isAuthenticated", returnFirstNameifAuthenticated);
module.exports = router;
