function init(req, res, next){

	if(!req.body.id){
		return res.json({msg:'missing_parameter_id'})
	}

	next()
}

module.exports = init