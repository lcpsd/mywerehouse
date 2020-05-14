function init(req, res, next){

	if(!req.body.name){
		return res.json({msg:'missing_parameter_name'})
	}

	if(!req.body.newValidity){
		return res.json({msg:'missing_parameter_newValidity'})
	}
  
	next()
}
  
module.exports = init