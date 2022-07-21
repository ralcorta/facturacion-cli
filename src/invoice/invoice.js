const moment = require('moment');
const afipFactory = require('../afip/afip.factory');

class Invoice {
    CantReg = 1;// Cantidad de comprobantes a registrar
    PtoVta = 2;// Punto de venta
    CbteTipo = 11;// Tipo de comprobante (ver tipos disponibles)
    Concepto = 2;// Concepto del Comprobante: (1)Productos (2)Servicios (3)Productos y Servicios
    DocTipo = 99;// Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
    DocNro = 0;// Número de documento del comprador (0 consumidor final)
    // CbteDesde = amountOfVochers + 1;// Número de comprobante o numero del primer comprobante en caso de ser mas de uno
    // CbteHasta = amountOfVochers + 1;// Número de comprobante o numero del último comprobante en caso de ser mas de uno
    CbteFch = moment().format('YYYYMMDD');// (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
    ImpTotal = null;// Importe total del comprobante
    ImpTotConc = 0;// Importe neto no gravado
    ImpNeto = null;// Importe neto gravado
    ImpOpEx = 0;// Importe exento de IVA
    ImpIVA = 0;//Importe total de IVA
    ImpTrib = 0;//Importe total de tributos
    MonId = 'PES';//Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos)
    MonCotiz = 1;// Cotización de la moneda usada (1 para pesos argentinos)
    FchServDesde = moment().format('YYYYMMDD');
    FchServHasta = moment().format('YYYYMMDD');
    FchVtoPago = moment().format('YYYYMMDD');

    constructor({ price, ImpTotal, ImpNeto }) {
        this.ImpTotal = ImpTotal ? ImpTotal : price;
        this.ImpNeto = ImpNeto ? ImpNeto : price;
    }

    async save(afipOpt) {
        return await afipFactory(afipOpt).ElectronicBilling.createNextVoucher({ ...this }, true);
    }

    static getLast(options) {
        return afipFactory(options).ElectronicBilling.getLastVoucher(2, 11);
    };

    static async get(afipOpt, invoice, salepoint, type) {
        if (!invoice) throw new Error('[StrictValidation] The invoice parameter must be something');
        if (!salepoint) throw new Error('[StrictValidation] The salepoint parameter must be something');
        if (!type) throw new Error('[StrictValidation] The type parameter must be something');

        return afipFactory(afipOpt).ElectronicBilling.getVoucherInfo(invoice, salepoint, type);
    };

}

module.exports = {
    Invoice
}