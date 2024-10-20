function iniciarMap(){
    var cordG = {lat:-5.3288761 ,lng: -80.625051};
    var cordLegua = {lat:-5.230015 ,lng: -80.657013};
    var cordNCM = {lat:-5.331455 ,lng: -80.605627};
    var cordBA = {lat:-5.351787 ,lng: -80.608484};
    var cordChato = {lat:-5.366728 ,lng: -80.665218};
    var cordAMG = {lat:-5.380593 ,lng: -80.612955};
    var cordSA = {lat:-5.395236 ,lng: -80.611943};
    var cordZV = {lat:-5.425430 ,lng: -80.606349};
    var cordTallan = {lat:-5.432018 ,lng: -80.608502};

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 11.5,
      center: cordG
    });
    var marker = new google.maps.Marker({
      position: cordLegua,
      map: map
    });
    var Marker = new google.maps.Marker({
        position: cordNCM,
        map: map
      });
      var Marker = new google.maps.Marker({
        position: cordBA,
        map: map
      });
      var Marker = new google.maps.Marker({
        position: cordChato,
        map: map
      });
      var Marker = new google.maps.Marker({
        position: cordAMG,
        map: map
      });
      var Marker = new google.maps.Marker({
        position: cordSA,
        map: map
      });
      var Marker = new google.maps.Marker({
        position: cordZV,
        map: map
      });
      var Marker = new google.maps.Marker({
        position: cordTallan,
        map: map
      });
}