async function byRange(req, itemModel, category){
	let startId = req.body.startId
	let endId = req.body.endId

	const categoryObj = await category.findOne({raw: true, where:{ name: req.body.categoryName }})

	return await itemModel.findAll({
		raw: true, where:{userId: req.session.userId, categoryId: categoryObj.id, id:{ [op.between]: [startId, endId]
		}}})
}

module.exports = byRange