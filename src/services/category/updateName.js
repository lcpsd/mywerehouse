async function init(req, categoryModel){
    try{
        let result = await categoryModel.update({name: req.body.newName}, {where:{name:req.body.name, userId: req.session.userId}})

        if(result == 0 ) return {error:"category_not_found"}

        return {success:"name_updated"}
    }catch(error){
        return {error: error}
    }
}

module.exports = init