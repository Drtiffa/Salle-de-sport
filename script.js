$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#spacer');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
            $('#navbar').css('background-color', '#0C0B0B');
        } else {
           $('#navbar').css('background-color', 'transparent');
        }
    });
 });