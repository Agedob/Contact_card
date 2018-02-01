
    //  var temp = $(this).attr('src');
    //  $(this).attr('src', $(this).attr('catsNninja'));
    //  $(this).attr('catsNninja', temp);




$(document).ready(function(){
    $('.sub').click(function(){
        var f = $('#first_name').val();
        var l = $('#last_name').val();
        var d = $('#description').val();
        $('.cards').append('<div class="card"> <h1>' + f + l + '</h1> <p class="back" altclass="back">' + d + '</p></div>');
        return false;
    });
    $('.cards').on('click', '.card', function(){
            $(this).children().toggle();
        })
});