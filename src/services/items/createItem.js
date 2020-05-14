async function init(req, itemModel, categoryModel){

	let categoryObj = await categoryModel.findOne({where: {name: req.body.categoryName}})

	if(categoryObj == null) return {error:"category_not_found"}

	let result = await itemModel.create({
		name: req.body.name,
		quantity: req.body.quantity,
		code: req.body.code,
		measure: req.body.measure,
		categoryId: categoryObj.id,
		userId: req.session.userId
	})

	return {success:'item_created'}
}

module.exports = init