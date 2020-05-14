async function init(planModel){

	let result = await planModel.findAll({raw: true})
	return result
}

module.exports = init