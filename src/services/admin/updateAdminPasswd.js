const bcrypt = require('bcryptjs')
const validator = require('../../validators/generic')

async function init(req, adminModel){

	let check = await validator.checkPasswd(req.session.admin, req.body.passwd, adminModel)

	if(!check) return {error: 'wrong_password'}

	let salt = await bcrypt.genSalt(10)
	let hash = await bcrypt.hash(req.body.newPasswd, salt)

	let result = await adminModel.update({passwdHash: hash}, {where:{email: req.session.admin}})

	if(result[0] == 1) return {success:'admin_updated'}

	return {error:'admin_not_found'}

}

module.exports = init