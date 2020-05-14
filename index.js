const Express = require('express')
const app = Express()
const routes = require('./src/routes')
const session = require('express-session')
var paypal = require('paypal-rest-sdk')

paypal.configure({
	'mode': 'sandbox', //sandbox or live
	'client_id': 'ARqrIlpFnYKD9gYdRCICjerTNM6frOfxi-EKbKZzX2qqOHuRGxwifXMj0nhsJ45bWehgp_MIdTVZwfY5',
	'client_secret': 'ELSgnuXqE96i2d5tK2vt7zNd-PcEcLcLNUFOjbd56BtuD4wY9SfXbTnsueC2FEu4cnjvFj1LVgvtAh-2'
})

app.use(session({'secret':'ha73mx@99aks-'}))
app.use(Express.json())
app.use(routes)

app.listen(9090, () => console.log('server OK'))