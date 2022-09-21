//

//

const express = require("express");
const router = express.Router();

//

const mainRoutes = require("../controllers/mainControllers");

//

router.get("/home", mainRoutes.home);
router.get("/menu/:idPlato", mainRoutes.detalleMenu);
router.get("/test", mainRoutes.test);

module.exports = router;
