async function init(req, categoryModel){
    try{
        return await categoryModel.findAll({raw: true, where:{userId: req.session.userId}})
    }catch(error){
        return {error: error}
    }
}

module.exports = init