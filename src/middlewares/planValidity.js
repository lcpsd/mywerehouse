const models = require('../models/index')
const userModel = models['User']
const planModel = models['Plan']
const milliConverter = require('../tools/milliConverter')

async function init(req, res, next){
    const userObj = await userModel.findOne({raw: true, where: {email: req.body.email}})

    //check trial period
    if(userObj.planId == null){
        let createdAt = userObj.createdAt

        createdAt = new Date(createdAt)

        let dateDiffMilli = Math.abs(createdAt - new Date())

        let dateDiffDays = milliConverter.toDays(dateDiffMilli)

        if(dateDiffDays >= 7) return res.json({error:"trial_period_ended"})

        return next()

    }

    //check plan validity
    let signatureDate = userObj.signatureDate
    signatureDate = new Date(signatureDate)

    const dateDiffMilli = Math.abs(signatureDate - new Date())

    let dateDiffDays = milliConverter.toDays(dateDiffMilli)

    const planObj = await planModel.findByPk(userObj.planId)

    if(dateDiffDays > planObj.validity) return res.json({error:"plan_has_expired"})

    return next()
}

module.exports = init