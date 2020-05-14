const validator = require('../../validators/generic')

async function init(req, userModel, plainModel){

	let check = await validator.checkName(req.body.planName, plainModel)

	if(!check) return {error:'plain_does_not_exists'}
    
	let result = await userModel.update({planId: req.body.planId}, {where:{email: req.session.email}})

	if(result[0] == 1) return {success:'user_updated'}

	return {error:'user_not_found'}

}

module.exports = init