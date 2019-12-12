var mapMarker = document.querySelector(".page-footer__map");
var mobileSize = window.matchMedia("(max-width: 767px)");
var desktopSize = window.matchMedia("(min-width: 1300px)");

function GoogleReadyHandlereek8gaim() {
  if (mobileSize.matches) {
    var infoWindow, map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93879895961685, lng: 30.32312739999995},
      zoom: 17,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: true,
      mapTypeId: "roadmap"
    });

    infoWindow = new google.maps.InfoWindow();
    (new google.maps.Marker({
        position: {lat: 59.93874874610281, lng: 30.32306885767207},
        map: map,
        icon: {
          url: "../img/map-pin.png",
          scaledSize: new google.maps.Size(57, 54)
        },
        animation: google.maps.Animation.DROP,
    }))
    .addListener('click', function (e) {
        infoWindow.setContent("HTML Academy, г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8");
        infoWindow.open(map, this);
    });
  } else if (desktopSize.matches) {
    var infoWindow, map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93903895961685, lng: 30.31942739999995},
      zoom: 17,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: true,
      mapTypeId: "roadmap"
    });

    infoWindow = new google.maps.InfoWindow();
    (new google.maps.Marker({
        position: {lat: 59.93874874610281, lng: 30.32306885767207},
        map: map,
        icon: {
          url: "../img/map-pin.png",
          scaledSize: new google.maps.Size(120, 106)
        },
        animation: google.maps.Animation.DROP,
    }))
    .addListener('click', function (e) {
        infoWindow.setContent("HTML Academy, г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8");
        infoWindow.open(map, this);
    });
  } else {
      var infoWindow, map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 59.93903895961685, lng: 30.32304739999995},
        zoom: 17,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeId: "roadmap"
      });

      infoWindow = new google.maps.InfoWindow();
      (new google.maps.Marker({
          position: {lat: 59.93874874610281, lng: 30.32306885767207},
          map: map,
          icon: {
            url: "../img/map-pin.png",
            scaledSize: new google.maps.Size(120, 106)
          },
          animation: google.maps.Animation.DROP,
      }))
      .addListener('click', function (e) {
          infoWindow.setContent("HTML Academy, г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8");
          infoWindow.open(map, this);
      });
  }
  mapMarker.classList.add("page-footer__del-after");
  return map;
}
