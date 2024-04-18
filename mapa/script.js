window.onload = function(){
    var map = L.map('map').setView([-8.047562, -34.877002], 13); // Define as coordenadas de Recife

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Adicione um marcador para a localização do usuário
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            L.marker([userLat, userLng]).addTo(map)
                .bindPopup('Sua Localização Atual')
                .openPopup();
        });

        // Adicione marcadores para pontos pré-cadastrados em Recife
        var points = [
            { name: "Faculdade Senac", latlng: [-8.05253,-34.88519] },
        ];

        points.forEach(function (point) {
            L.marker(point.latlng).addTo(map).bindPopup(point.name);
        });

        // Atualize o tamanho do mapa quando a janela for redimensionada
        window.addEventListener('resize', function () {
            map.invalidateSize();
        });
}

