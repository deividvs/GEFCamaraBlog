$(function() {
    $(window).scroll(function() {
        var body = $(".navbar.navbar-default.navbar-fixed-top");
        if(body.offset().top >= 50){
            body.fadeOut();
        }else if(body.offset().top <= 50){
            body.fadeIn();
        }

        if(body.offset().top >= 100){
            // $('aside').removeClass('offset-left');
            // $('aside').addClass('offset-right');
        }
    });

    $('.col-md-4.sidebar').css('min-height', ($('.flex-row.row.blog, .blog-content').height() + 20) + 'px');
});



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
