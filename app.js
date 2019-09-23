const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }

}).argv;

//argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);



const getInfo = async(direccion) => {
    try {
        const lugars = await lugar.getLugarLatLng(direccion);

        const climas = await clima.getClima(lugars.lat, lugars.lng);

        return `El clima de ${direccion} es de ${climas}`;

    } catch (e) {

        return `No se pudo determinar el clima de ${direccion}`;

    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(console.log);