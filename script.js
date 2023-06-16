function initMap() {
    var mapOptions = {
      center: { lat: -33.5625, lng: -70.675 },
      zoom: 18,
      draggable: false,
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false
    };
  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    map.setOptions({
      styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'transit',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    function addTextOnMouseOver(marker, text) {
        var infowindow = new google.maps.InfoWindow({
          content: text
        });
      
        marker.addListener('mouseover', function() {
          infowindow.open(marker.getMap(), marker);
        });
      
        marker.addListener('mouseout', function() {
          infowindow.close();
        });
      }
  
    var CasaUno = new google.maps.Marker({
        position: { lat: -33.5614 , lng: -70.6762 },
        map: map,
        icon: 'Icons/casa.png'
      });

      addTextOnMouseOver(CasaUno, 'Casa A');
      
      var CasaDos = new google.maps.Marker({
        position: { lat: -33.563 , lng: -70.673 },
        map: map,
        icon: 'Icons/casa.png'
      });

      addTextOnMouseOver(CasaDos, 'Casa B');
      
      var CasaTres = new google.maps.Marker({
        position: { lat: -33.563 , lng: -70.676 },
        map: map,
        icon: 'Icons/casa.png'
      });

      addTextOnMouseOver(CasaTres, 'Casa C');
      
      var CasaCuatro = new google.maps.Marker({
        position: { lat: -33.561 , lng: -70.671 },
        map: map,
        icon: 'Icons/casa.png'
      });

      addTextOnMouseOver(CasaCuatro, 'Casa D');
      
      var CasaCinco = new google.maps.Marker({
        position: { lat: -33.562 , lng: -70.679 },
        map: map,
        icon: 'Icons/casa.png'
      });

      addTextOnMouseOver(CasaCinco, 'Casa E');
      
      var Hospital = new google.maps.Marker({
        position: { lat: -33.5617 , lng: -70.6749 },
        map: map,
        icon: 'Icons/hospital.png'
      });

      addTextOnMouseOver(Hospital,'Hospital');
      
      var Colegio = new google.maps.Marker({
        position: { lat: -33.5621 , lng: -70.6752 },
        map: map,
        icon: 'Icons/colegio.png'
      });

      addTextOnMouseOver(Colegio, 'Colegio');

      var Bombero = new google.maps.Marker({
        position: { lat: -33.5620 , lng: -70.6773 },
        map: map,
        icon: 'Icons/bombero.png'
      });

      addTextOnMouseOver(Bombero, 'Bomberos');

      var Policia = new google.maps.Marker({
        position: { lat: -33.5640 , lng: -70.6770 },
        map: map,
        icon: 'Icons/policia.png'
      });

      addTextOnMouseOver(Policia, 'Policia');

      var SuperUno = new google.maps.Marker({
        position: { lat: -33.5625 , lng: -70.6771 },
        map: map,
        icon: 'Icons/supermercado.png'
      });

      addTextOnMouseOver(SuperUno, 'Supermercado');

      var SuperDos = new google.maps.Marker({
        position: { lat: -33.56160 , lng: -70.6730 },
        map: map,
        icon: 'Icons/supermercado.png'
      });

      addTextOnMouseOver(SuperDos, 'Supermercado');

      var Agua = new google.maps.Marker({
        position: { lat: -33.5629 , lng: -70.6787 },
        map: map,
        icon: 'Icons/agua.png'
      });

      addTextOnMouseOver(Agua, 'Compañia de Agua');
     
      var Luz = new google.maps.Marker({
        position: { lat: -33.5628 , lng: -70.6750 },
        map: map,
        icon: 'Icons/luz.png'
      });

      addTextOnMouseOver(Luz, 'Compañia de Luz');

      var Gas = new google.maps.Marker({
        position: { lat: -33.5620 , lng: -70.67125 },
        map: map,
        icon: 'Icons/gas.png'
      });

      addTextOnMouseOver(Gas, 'Compañia de Gas');

      var PlazaUno = new google.maps.Marker({
        position: { lat: -33.561 , lng: -70.6785 },
        map: map,
        icon: 'Icons/parque.png'
      });

      addTextOnMouseOver(PlazaUno, 'Plaza');

      var PlazaDos = new google.maps.Marker({
        position: { lat: -33.5615 , lng: -70.6788 },
        map: map,
        icon: 'Icons/parque.png'
      });

      addTextOnMouseOver(PlazaDos, 'Plaza');

      var Iglesia = new google.maps.Marker({
        position: { lat: -33.56103 , lng: -70.67395 },
        map: map,
        icon: 'Icons/iglesia.png'
      });

      addTextOnMouseOver(Iglesia, 'Iglesia');

      var Cine = new google.maps.Marker({
        position: { lat: -33.5624 , lng: -70.6709 },
        map: map,
        icon: 'Icons/cine.png'
      });  

      addTextOnMouseOver(Cine, 'Cine');

      
  }

  
  





/*
    *agregar marcador con archivo json (formato google ver modificación) (para los integrantes de cada familia)

Debe aleatoriamente escoger los integrantes de cada familia del punto anterior. 
o Existirán familias con: 
 1 persona. 
 2 personas. 
 2 personas y 1 niño. 
 2 personas y 2 niños. 
 Ó 2 personas y 3 niños. 


*/
