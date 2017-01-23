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