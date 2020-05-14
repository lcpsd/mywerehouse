const paypal = require('paypal-rest-sdk')

async function confirmBasic(req, userModel, planModel){
    
    let planObj = await planModel.findOne({where:{id: req.body.planId}})

    if(planObj == null) return {error: "plan_id_does_not_exists"}

    let paymentData = {
        "payer_id": req.body.PayerID,
        "transactions":[{
            "amount":{
                "currency":req.body.currency,
                "total": planObj.value
            }
        }]
    }

    let payPromisse = new Promise((resolve, reject) => {
		paypal.payment.execute(req.body.paymentId, paymentData, (err, data) => {

			if (err) return reject(err)
			return resolve(data)
		})
	})

    let dateNow = new Date().toISOString()

    try{

        let result = await Promise.resolve(payPromisse)

        let updateResult = await userModel.update({planId: req.body.planId, signatureDate: dateNow}, {where:{email: req.session.email}})

        if(updateResult[0] == 1) return {success: result}
        return {error:"error_at_user_update"}


    }catch(error){
        return {error}
    }

}

module.exports = confirmBasic