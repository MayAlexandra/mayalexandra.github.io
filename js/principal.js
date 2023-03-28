var mapa = L.map('mapa').setView([-31.9463293,-65.1853568], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

L.marker([-31.9463293,-65.1853568]).addTo(mapa)
    .bindPopup('Mi lugar')
    .openPopup();
    