const {Router} = require('express')
const routes = Router()

//Generic Controllers
const login_controller = require('./controllers/login')

//User Controllers
const user_controller = require('./controllers/user')

//User middlewares
const userAuth = require('./middlewares/userAuth')
const adminAuth = require('./middlewares/adminAuth')
const planValidity = require('./middlewares/planValidity')

//validators
const loginUserMid = require('./validators/middlewares/user/delete')
const newUserMid = require('./validators/middlewares/user/new')
const updateUserEmailMid = require('./validators/middlewares/user/updateEmail')
const updateUserPassMid = require('./validators/middlewares/user/updatePass')
const updateUserPlanMid = require('./validators/middlewares/user/updatePlan')
const deleteUserMid = require('./validators/middlewares/user/delete')

//user Routes
routes.post('/user/new', newUserMid, user_controller.create)
//{name: string, email: string, passwd: string}
        
routes.get('/user', adminAuth, user_controller.readAll)
//
        
routes.post('/user/login', loginUserMid, planValidity, login_controller.userLogin)
//{email: string, passwd: string}
        
routes.put('/user/update/email',updateUserEmailMid, userAuth, user_controller.updateEmail)
//{ newEmail: string, passwd: string }

routes.put('/user/update/passwd',updateUserPassMid, userAuth, user_controller.updatePass)
//{ passwd: string , newPass: string }

routes.put('/user/update/plan',updateUserPlanMid, userAuth, user_controller.updatePlan)
//{ planName: string }
        
routes.delete('/user/delete',deleteUserMid, userAuth, user_controller.delete)
//{ passwd: string }

//_________________________________________________________________________________________________________//


//Admin Controllers
const admin_controller = require('./controllers/admin')

//Admin Middlewares
const loginAdminMid = require('./validators/middlewares/admin/login')
const newAdminMid = require('./validators/middlewares/admin/login')
const deleteAdminMid = require('./validators/middlewares/admin/login')
const updateAdminEmailMid = require('./validators/middlewares/admin/login')
const updateAdminPasswdMid = require('./validators/middlewares/admin/login')

//admin Routes
routes.get('/admin',adminAuth, admin_controller.read)
//

routes.post('/admin/new', newAdminMid, admin_controller.create)
//{email: string, passwd: string, rootPass: string}
    
routes.post('/admin/login', loginAdminMid, login_controller.adminLogin)
//{passwd: string}

routes.delete('/admin/delete', deleteAdminMid, adminAuth, admin_controller.delete)
//{passwd: string}

routes.put('/admin/update/email', updateAdminEmailMid, adminAuth, admin_controller.updateEmail)
//{newEmail: string, passwd: string}

routes.put('/admin/update/passwd', updateAdminPasswdMid, adminAuth, admin_controller.updatePasswd)
//{newPasswd: string, passwd: string}

//_________________________________________________________________________________________________________//

//Plan Controllers
const plan_controller = require('./controllers/plans')

//Plan Middlewares
const newPlanMid = require('./validators/middlewares/plans/new')
const deletePlanMid = require('./validators/middlewares/plans/delete')
const updatePlanNameMid = require('./validators/middlewares/plans/updateName')
const updatePlanValidityMid = require('./validators/middlewares/plans/updateValidity')
const updatePlanValueMid = require('./validators/middlewares/plans/updateValue')
//Plans Routes
routes.get('/plan', plan_controller.read)
//

routes.post('/plan/new', newPlanMid, adminAuth, plan_controller.create)
//{id: int, name: string, value: int, validity:int (days)}
    
routes.put('/plan/update/name', updatePlanNameMid, adminAuth, plan_controller.updateName)
//{name: string, newName: string }

routes.put('/plan/update/validity', updatePlanValidityMid, adminAuth, plan_controller.updateValidity)
//{name: string, newValidity: string }

routes.put('/plan/update/value', updatePlanValueMid, adminAuth, plan_controller.updateValue)
//{name: string, newValue: string }

routes.delete('/plan/delete', deletePlanMid, plan_controller.delete)
//{name: string}

//_________________________________________________________________________________________________________//

//items Controllers
const items_controller = require('./controllers/item')

//items Middlewares
const newOpMid = require('./validators/middlewares/operations/new')
const deleteOpMid = require('./validators/middlewares/operations/delete')
const updateOpMid = require('./validators/middlewares/operations/update')

//items Routes

routes.post('/item/new', userAuth, newOpMid, items_controller.create)
//{name: string, quantity: float, code: int, measure: string, categoryName: string}

routes.delete('/item/delete', userAuth, deleteOpMid, items_controller.delete)
//{id: int}

routes.post('/item/readbyrange', userAuth, readUpdateMid, items_controller.readByRange)
//{startId: int, endId: int, categoryName: string}

routes.put('/item/updateCode', userAuth, updateOpMid, items_controller.updateCode)
//{id: int, newCode: int}

routes.post('/item/read/updateName', userAuth, items_controller.updateName)
//{id: int, newName: string}

routes.post('/item/read/updateQuantity', userAuth, items_controller.updateQuantity)
//{id: int, newQty: float}

//_________________________________________________________________________________________________________//

//Pay Controllers
const pay_controller = require('./controllers/payPlan')

//Pay Routes
routes.post('/plan/pay/create', userAuth, pay_controller.create)
//{currency: string, planId: string}

routes.post('/plan/pay/confirm', userAuth, pay_controller.confirm)
//{currency: string, PayerID: string, paymentId: string, planId: string}

//_________________________________________________________________________________________________________//

//Category Controllers
const category_controller = require('./controllers/Category')

//Category Middlewares
const newCategoryMid = require('./validators/middlewares/category/new')
const deleteCategoryMid = require('./validators/middlewares/category/delete')
const updateCategoryStateMid = require('./validators/middlewares/category/update state')
const updateCategoryNameMid = require('./validators/middlewares/category/updateName')

//Category Routes
routes.post("/Category/new", userAuth, newCategoryMid, category_controller.create)
//{name: string}

routes.get("/Category/read/all", userAuth, category_controller.read)
//

routes.post("/Category/update/name", userAuth, updateCategoryNameMid, category_controller.updateName)
//{name: string, newName: string}

routes.post("/Category/update/state", userAuth, updateCategoryStateMid, category_controller.updateState)
//{name: string}

routes.post("/Category/delete", userAuth, deleteCategoryMid, category_controller.delete)
//{name: string}

module.exports = routes