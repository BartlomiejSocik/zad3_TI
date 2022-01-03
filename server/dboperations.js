var config = require('./dbconfig');
const sql = require('mssql');


async function getJednostki() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from J_jednostki");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getJednostkiv1(rodzaj,dataOD,dataDO) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Bit, rodzaj)
            .input('input_parameterOD', sql.Date, dataOD)
            .input('input_parameterDO', sql.Date, dataDO)
            .query("SELECT * FROM dbo.J_wypozyczenia w INNER JOIN dbo.J_jednostki j ON j.ID = w.ID_Jednostki Where (w.Data_OD >= @input_parameterOD OR w.Data_DO <= @input_parameterOD) AND (w.Data_OD >= @input_parameterDO OR w.Data_DO <= @input_parameterDO) AND j.Czy_morski = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function getJednostka(id=2) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .input('input_parameterID', sql.Int, id)
        .query("SELECT * from J_jednostki WHERE ID = @input_parameterID");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getJednostki: getJednostki,
    getJednostkiv1 : getJednostkiv1,
    getJednostka : getJednostka,
}