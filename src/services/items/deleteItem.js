async function init(req, itemModel){

	let result = await itemModel.destroy({where:{id:req.body.id}})
	
	if(result == 1) return {success:'item_deleted'}

	return {error:'item_not_found'}
}

module.exports = init