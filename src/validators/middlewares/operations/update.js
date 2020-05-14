function init(req, res, next){

	if(!req.body.id){
		return res.json({msg:'missing_parameter_id'})
	}

	if(!req.body.value){
		return res.json({msg:'missing_parameter_value'})
	}

	next()
}

module.exports = init