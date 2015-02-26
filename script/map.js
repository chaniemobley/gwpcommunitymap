//new
var infowindow;
(function () {

    google.maps.Map.prototype.markers = new Array();

    google.maps.Map.prototype.addMarker = function (marker) {
        this.markers[this.markers.length] = marker;
    };

    google.maps.Map.prototype.getMarkers = function () {
        return this.markers;
    };

    google.maps.Map.prototype.clearMarkers = function () {
        if (infowindow) {
            infowindow.close();
        }

        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].set_map(null);
        }
    };
})();

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(39.768403, -86.158068),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    var a = new Array();


    var t = new Object();
    t.name = "City Market"
    t.lat = 39.7684662
    t.lng = -86.1540548
    t.desc = "<div style=\"width:100%; height:100%;\";><h4 style=\"font-weight:bold\"><a href=\"/clients/demo/communitymap/view/City+Market\">City Market</a></h4><div><a href=\"http://www.indycm.com\" target=\"_blank\">www.indycm.com</a></div><div>222 E Market St<br>Indianapolis, IN 46204</div></div>"
    a[0] = t;

    var t = new Object();
    t.name = "Agrarian"
    t.lat = 39.8426378
    t.lng = -86.1460198
    t.desc = "<div style=\"width:100%; height:100%;\";><h4 style=\"font-weight:bold\"><a href=\"/clients/demo/communitymap/view/Agrarian\">Agrarian</a></h4><div><a href=\"http://www.agrarianindy.com\" target=\"_blank\">www.agrarianindy.com</a></div><div>661 East 49th Street Map, 46205 <br>Indianapolis, IN 46205</div><div>(317) 493-1166</div></div>"
    a[1] = t;

    var t = new Object();
    t.name = "Bjava Coffee & Tea"
    t.lat = 39.8516197
    t.lng = -86.2631756
    t.desc = "<div style=\"width:100%; height:100%;\";><h4 style=\"font-weight:bold\"><a href=\"/clients/demo/communitymap/view/Bjava+Coffee+&+Tea\">Bjava Coffee & Tea</a></h4><div><a href=\"http://beejava.blogspot.com\" target=\"_blank\">beejava.blogspot.com</a></div><div>5510 Lafayette Rd #140<br>Indianapolis, IN 46254</div></div>"
    a[2] = t;


    for (var i = 0; i < a.length; i++) {
        var latlng = new google.maps.LatLng(a[i].lat, a[i].lng);
        map.addMarker(createMarker(a[i].name, latlng, a[i].desc));
    }
    console.log(map.getMarkers());

    console.log(map.getMarkers());

    function createMarker(name, latlng, desc) {
        var marker = new google.maps.Marker({position: latlng, map: map, animation: google.maps.Animation.DROP,
            title: name, icon: ''});
        google.maps.event.addListener(marker, "click", function () {
            if (infowindow) infowindow.close();
            infowindow = new google.maps.InfoWindow({content: desc});
            infowindow.open(map, marker);
        });
        return marker;
    }

}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function () {
    google.maps.event.trigger(map, "resize");
});
