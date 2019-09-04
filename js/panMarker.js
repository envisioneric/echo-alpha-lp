$(document).ready(function() {
  initialize();

  $("#contacts").on("click", ".map_link", function() {
    /* "this" within handler is the actual element clciked*/

    /* find correct array from "cities" object */
    var data = cities[$(this).data("city")]; /* returns array[ 53.21, 6.56, 4]*/
    var laLatLng = new google.maps.LatLng(data[0], data[1]);
    map.panTo(laLatLng);
    map.setZoom(data[2]);
  });
});
