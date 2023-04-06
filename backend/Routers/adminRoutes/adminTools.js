const router = require('express').Router();

const GetDashHomeInfoController = require('../../Controllers/adminContollers/GetDashHomeInfoController')
const LoginAdmin = require('../../Controllers/adminContollers/LoginAdmin')
const IsLoginController = require('../../Controllers/adminContollers/IsLoginController')
const GetDataAdminController = require('../../Controllers/adminContollers/GetDataAdminController')


const TestAdminController = require('../../Controllers/adminContollers/TestAdminController')

// TestAdminController,

// http://localhost:3000/admin/dashHome
// router.get('/dashHome',TestAdminController,GetDashHomeInfoController);

// http://localhost:3000/admin/dashboard
// dashboard profil 
router.get('/dashboard',GetDashHomeInfoController);
 







// dashboard profil 
router.post('/loginAdmin' ,LoginAdmin.LoginAdmin);


//login dasch


router.get('/IsLoginAdmin',IsLoginController.IsLoginController) ;

router.get('/DataAdmin',GetDataAdminController) ;








module.exports = router;

