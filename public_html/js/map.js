
// adds the map 
    function initMap() {
      // variable with location of chinatown
      var chinatown = {lat: 37.794671, lng: -122.405683}
      //center chinatown on google maps
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 15, center: chinatown});
      // puts the marker on chinatown!
      var marker = new google.maps.Marker({position: chinatown, map: map});
    }