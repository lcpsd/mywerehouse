const paypal = require('paypal-rest-sdk')

async function basicPlan(req, planModel){

	//check if the plan exists
	let planObj = await planModel.findOne({raw: true, where: {id: req.body.planId}})

	if(planObj == null) return {error:"plan_not_found"}

	//create json for request payment creation
	var create_payment_json = {
		'intent': 'sale',
		'payer': {
			'payment_method': 'paypal'
		},
		'redirect_urls': {
			'return_url': 'http://url/pay/confirm', //replace with real front-end url when deploy
			'cancel_url': 'http://url/pay/cancel'
		},
		'transactions': [{
			'item_list': {
				'items': [{
					'name': 'plan_basic',
					'sku': 'plan_basic',
					'price': planObj.value,
					'currency': req.body.currency,
					'quantity': 1
				}]
			},
			'amount': {
				'currency': req.body.currency,
				'total': planObj.value
			},
			'description': 'Payment for  basic plan on trading manager plataform'
		}]
	}

	//create a promise for resolve the payment
	let payPromisse = new Promise((resolve, reject) => {
		paypal.payment.create(create_payment_json, (err, data) => {

			if (err) return reject()
			return resolve(data)
		})
	})

	//return link to pay
	try{
		let paymentResult = await Promise.resolve(payPromisse)
		return {success: paymentResult.links[1], 
				currency: req.body.currency, 
				planId: req.body.planId}
	}catch(error){
		return {error: error}
	}

}

module.exports = basicPlan