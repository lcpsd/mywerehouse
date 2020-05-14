const validator = require('../../validators/generic')

async function init(req, categoryModel){
    try{

        let check = await validator.checkName(req.body.name, categoryModel)

        if(check) return {error: "name_aready_exists"}

        await categoryModel.create({name: req.body.name, userId: req.session.userId})

        return {success: "category_created"}
    }catch(error){
        return {error: error}
    }
}

module.exports = init