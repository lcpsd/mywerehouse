function init(req, res, next){

	if(!req.body.name){
		return res.json({msg:'missing_parameter_name'})
	}

	if(!req.body.newValue){
		return res.json({msg:'missing_parameter_newValue'})
	}
  
	next()
}
  
module.exports = init