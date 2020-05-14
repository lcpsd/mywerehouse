async function init(admin_model){
	let result = await admin_model.findAll({raw: true})
	return result
}

module.exports = init