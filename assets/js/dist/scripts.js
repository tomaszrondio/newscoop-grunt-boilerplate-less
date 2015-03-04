 window.gapp = {

  isPhonegap : false,
  isSharingAvailable: false,
  language : 'en',
  ngApp: null,
  RcTitle: '',
  RcAlbum: '',

  init: function(){

    if (window.cordova !== undefined) {
      console.log('Cordova found, wating for device.');
      this.bindEvents();
    } else {
      console.log('Cordova not found, booting application');
      this.onDeviceReady();
    }

  },

  bindEvents : function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener("pause", this.onPause, false);
    document.addEventListener("remote-event", this.remoteEvent);

    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
  },

  onDeviceReady : function(){

    gapp.ngApp = angular.bootstrap(document, ['app']);

    var _that = gapp;

    if (window.cordova !== undefined) {
      gapp.isPhonegap = true;

      navigator.globalization.getLocaleName(
          function (locale) {

            var rootScope = _that.ngApp.get("$rootScope");
            rootScope.$broadcast("langChange", locale.value);

          },
          function () {console.log('Error getting locale\n');}
      );


      window.plugins.socialsharing.available(function(isAvailable) {
        // the boolean is only false on iOS < 6
        if (isAvailable) {
          gapp.isSharingAvailable = true;
        }
      });
    }



  },

  onPause: function(){
    gapp.setRemoteControls();
  },
  remoteEvent : function(event){


    var rootScope = gapp.ngApp.get("$rootScope");

    if(event.remoteEvent.subtype=='play'){
      rootScope.$broadcast("playClicked");
    }else if(event.remoteEvent.subtype=='pause'){
      rootScope.$broadcast("pauseClicked");
    }
     setTimeout(function(){gapp.setRemoteControls(); }, 500);


  },
  updateRemoteControlsInfo: function(title, album){
    gapp.RcAlbum = album;
    gapp.RcTitle = title;

  },

  setRemoteControls: function(){

    if(gapp.isPhonegap){


      var params = [gapp.RcTitle, appConfig.stationName, gapp.RcAlbum];

      window.plugins.remoteControls.updateMetas(function(success){
        console.log(success);
      }, function(fail){
        console.log(fail);
      }, params);
    }
  },

  share : function(message, subject, link){

    // to make sure that url has protocol
    if(link){
      if(link.indexOf("http") == -1) link = 'http://'+link;
    }

    if (gapp.isSharingAvailable) {
      window.plugins.socialsharing.share(message, subject, null, link);
    }

  },

  isConnection: function(){

    if(gapp.isPhonegap){

      if(navigator.connection.type == Connection.NONE){
        return false;
      }else{
        return true;
      }

    }else{
      return true;
    }

  }

};


gapp.init();



