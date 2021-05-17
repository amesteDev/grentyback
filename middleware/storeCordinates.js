const axios = require('axios');

class CordinateServ {
    async save(adressInput, cityInput) {
        let cordinates = {
            latitude: null,
            longitude: null,
        };
        adressInput = adressInput
            .replace(/ä/g, '%C3%A4')
            .replace(/Ä/g, '%C3%A4')
            .replace(/å/g, '%C3%A5')
            .replace(/Å/g, '%C3%A5')
            .replace(/ö/g, '%CR%B6')
            .replace(/Ö/g, '%CR%B6')
            .replace(/ /g, '+')

        cityInput = cityInput
            .replace(/ä/g, '%C3%A4')
            .replace(/Ä/g, '%C3%A4')
            .replace(/å/g, '%C3%A5')
            .replace(/Å/g, '%C3%A5')
            .replace(/ö/g, '%CR%B6')
            .replace(/Ö/g, '%CR%B6')
            .replace(/ /g, '+')

        await axios.get("https://nominatim.openstreetmap.org/search.php?street=" + adressInput + "&city=" + cityInput + "&format=jsonv2")
            .then(response => {
                cordinates.latitude = response.data[0].lat;
                cordinates.longitude = response.data[0].lon;
            })
        return cordinates;
    }
}

module.exports = CordinateServ;