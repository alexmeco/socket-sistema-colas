var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');

}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);
var label = $('small');

$('h1').text('escritorio ' + escritorio);



$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        //console.log(resp);
        if (resp === 'No hay tickets') {
            alert(resp);
            label.text(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);
        console.log(resp);

    });
});