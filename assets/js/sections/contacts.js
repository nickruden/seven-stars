document.addEventListener("DOMContentLoaded", function () {
  // Координаты всех адресов
  const addresses = [
    { name: "ул. Алмазная, 5 (м-н Первомайский)", coords: [52.260190, 104.234981] },
    { name: "ул. Декабрьских событий, 102", coords: [52.279908, 104.313557] },
    { name: "ул. Александра Невского, 60", coords: [52.268656, 104.313835] },
    { name: "ул. Каландаришвили, 7", coords: [52.288899, 104.290829] },
    { name: "ул. Березовая, 8 (м-н Солнечный)", coords: [52.224489, 104.295905] },
  ];

  const mapContainer = document.querySelector(".contacts__map-wrap");
  mapContainer.innerHTML = '<div id="yandex-map"></div>';

  ymaps.ready(init);

  function init() {
    const map = new ymaps.Map("yandex-map", {
      center: [52.276655, 104.285330],
      zoom: 25,
      controls: ["zoomControl"],
    });

    // Добавляем метки для каждого адреса
    addresses.forEach((addr) => {
      const placemark = new ymaps.Placemark(
        addr.coords,
        {
          balloonContent: addr.name,
        },
        {
          preset: "islands#redDotIcon",
        }
      );

      map.geoObjects.add(placemark);
    });

    // Убедимся, что все метки видны на карте
    map.setBounds(map.geoObjects.getBounds(), {
      checkZoomRange: true,
    });
  }
});
