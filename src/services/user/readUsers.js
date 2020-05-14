async function init(userModel){
	let result = await userModel.findAll({raw: true})
	return result
}

module.exports = init