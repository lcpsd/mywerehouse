async function init(req, categoryModel){
    try{
        let result = await categoryModel.destroy({where: {name: req.body.name, userId: req.session.userId}})

        if(result == 0) return {error:"category_doesnt_exists"}

        return {success:"category_deleted"}

    }catch(error){
        return {error: error}
    }
}

module.exports = init