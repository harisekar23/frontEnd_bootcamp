$('button').css('color', 'red');

$('h1').addClass('big-title');


// for loop in jQuery
// default i = 0, for ebery iteration it'll increment itself.

// var i = 1;
$('button').each(function(e){ 
    $(this).addClass(`btn-${e}`);
    // i += 1;
});

// for(i = 0; i < 5; i++)
// {
    document.querySelectorAll('button')[i].addEventListener('click', function(i)
    {
        document.querySelector('button')[i].style.color = 'purple';
    });
// }