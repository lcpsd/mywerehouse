function init(req, res, next){

	if(!req.body.name){
		return res.json({msg:'missing_parameter_name'})
	}

	if(!req.body.value){
		return res.json({msg:'missing_parameter_value'})
	}

	if(!req.body.validity){
		return res.json({msg:'missing_parameter_validity'})
	}
  
	next()
}
  
module.exports = init