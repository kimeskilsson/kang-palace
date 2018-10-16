
// Initialize and add the map
    function initMap() {
      // The location of chinatown
      var chinatown = {lat: 37.794671, lng: -122.405683}
      // The map, centered at chinatown
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 15, center: chinatown});
      // The marker, positioned at chinatown
      var marker = new google.maps.Marker({position: chinatown, map: map});
    }