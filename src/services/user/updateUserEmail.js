const validator = require('../../validators/generic')

async function init(req, userModel){

	let check = await validator.checkPasswd(req.session.email, req.body.passwd, userModel)

	if(!check) return {error:'password_wrong'}

	let result = await userModel.update({email: req.body.newEmail}, {where:{email: req.session.email}})

	req.session.email = req.body.email

	if(result[0] == 1 || result == 1) return {success:'user_updated'}

	return {error:'user_not_found'}

}

module.exports = init