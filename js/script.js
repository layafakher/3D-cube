
$('#submitX').click(function () {
    let degree = $('#xdeg').val();
    let newRotation = 'rotateX('+degree+'deg)';
    if (isNaN(degree) || degree.length === 0) {
        alert('You should Enter a number');
    }
    let current = $('.cube').css('transform');
    if(current === 'none') current = '';
    $('.cube').css('transform', current + ' ' + newRotation);
    console.log(current);


});

$('#submitY').click(function () {
    let degree = $('#ydeg').val();
    let newRotation = 'rotateY(' + degree + 'deg)';
    if (isNaN(degree)){
        alert('You should Enter a number');
    }
    let current = $('.cube').css('transform');
    $('.cube').css('transform', current + ' ' + newRotation);

});

