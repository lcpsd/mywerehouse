function init(req, res, next){
	if(!req.session.email){
		return res.json({msg:'unauthorized'})
	}

	next()
}

module.exports = init