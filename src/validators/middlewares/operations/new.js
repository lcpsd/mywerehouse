function init(req, res, next){

	if(!req.body.value){
		return res.json({msg:'missing_parameter_value'})
	}

	if(!req.body.tabName){
		return res.json({msg:'missing_parameter_tabName'})
	}

	next()
}

module.exports = init