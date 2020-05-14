const bcrypt = require('bcryptjs')
const validator = require('../../validators/generic')

async function init(req, userModel){

	let check = await validator.checkPasswd(req.session.email, req.body.passwd, userModel)

	if(!check) return {error: 'wrong_password'}

	let salt = await bcrypt.genSalt(10)
	let hash = await bcrypt.hash(req.body.newPass, salt)

	let result = await userModel.update({passwdHash: hash}, {where:{email: req.session.email}})

	if(result[0] == 1 || result == 1) return {success:'user_updated'}

	return {error:'user_not_found'}

}

module.exports = init