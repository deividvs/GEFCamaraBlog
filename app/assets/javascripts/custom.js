(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:396206,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');



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

    $('.timer').html(days + ' DIAS <br/>' + (hours < 10 ? '0'+hours : hours)
        + ':' + (minutes < 10 ? '0'+minutes : minutes) + ':'
        + (seconds < 10 ? '0'+ seconds : seconds));

    setTimeout(function(){updateTime(); }, 60);
}
updateTime();
