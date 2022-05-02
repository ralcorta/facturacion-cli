const moment = require('moment');
const afipFactory = require('./afip-owner');
const chalk = require('chalk');

module.exports = async function createBill(amount, price, afipOpt = {}) {
	if (price > 5000) throw new Error('[StrictValidation] The price of invoices must be less than $5.0000');
	if (price < 0) throw new Error('[StrictValidation] The price of invoices must be higher than $5.0000');

	if (amount > 20)
		throw new Error(
			'[HelpValidation] The amount of bills created on the same time should be less or equal than 20.'
		);

	if (amount < 0)
		throw new Error('[Validation] The amount of bills created on the same time should be higher than 0.');

	const actualDate = moment().format('YYYYMMDD');
	const vouchers = [];
	for (let i = 0; i < amount; i++) {
		let data = {
			CantReg: 1, // Cantidad de comprobantes a registrar
			PtoVta: 2, // Punto de venta
			CbteTipo: 11, // Tipo de comprobante (ver tipos disponibles)
			Concepto: 2, // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
			DocTipo: 99, // Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
			DocNro: 0, // Número de documento del comprador (0 consumidor final)
			// CbteDesde: amountOfVochers + 1, // Número de comprobante o numero del primer comprobante en caso de ser mas de uno
			// CbteHasta: amountOfVochers + 1, // Número de comprobante o numero del último comprobante en caso de ser mas de uno
			CbteFch: actualDate, // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
			ImpTotal: price, // Importe total del comprobante
			ImpTotConc: 0, // Importe neto no gravado
			ImpNeto: price, // Importe neto gravado
			ImpOpEx: 0, // Importe exento de IVA
			ImpIVA: 0, //Importe total de IVA
			ImpTrib: 0, //Importe total de tributos
			MonId: 'PES', //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos)
			MonCotiz: 1, // Cotización de la moneda usada (1 para pesos argentinos)
			FchServDesde: actualDate,
			FchServHasta: actualDate,
			FchVtoPago: actualDate
		};

		const res = await afipFactory(afipOpt).ElectronicBilling.createNextVoucher(data, true);
		console.log(chalk.cyan.bold(`[AFIP] Invoice ${i + 1} created.`));
		vouchers.push(res);
	}
	return vouchers;
};
