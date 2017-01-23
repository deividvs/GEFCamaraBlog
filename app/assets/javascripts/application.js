// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require sweetalert2
//= require jquery.validate
//= require jquery.validate.additional-methods
//= require jquery.validate.localization/messages_pt_BR
//= require_tree .


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8&appId=1431166670433392";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function DiffDate(endTime){
    var dateDiff = Date.parse(endTime) - Date.parse(new Date());

    this.days = function(){
        return Math.floor( dateDiff/(1000*60*60*24) );
    }

    this.hours = function(){
        return Math.floor( (dateDiff/(1000*60*60)) % 24 );
    }

    this.minutes = function(){
        return Math.floor( (dateDiff/1000/60) % 60 );
    }

    this.seconds = function(){
        return Math.floor( (dateDiff/1000) % 60 );
    }
}

function updateTime(){
    var diff = new DiffDate('2017-01-30');
    var days = diff.days();
    var hours = diff.hours();
    var minutes = diff.minutes();
    var seconds = diff.seconds();

    $('.timer').html(days + ' DIAS <br/>' + hours + ':' + minutes + ':' + seconds);

    setTimeout(function(){updateTime(); }, 60);
}
updateTime();
