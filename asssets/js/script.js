// BOOTSTRAP TOOLTIP
 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

 //LLAMADO AL MODAL

document.getElementById('botonenviar').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    var nombreContacto = $('#nombre-contacto').val();    
    var mensajeContacto = $('#mensajeContacto').val(); 
    
    $('.modal-body').html('<h5>' + nombreContacto + ': </h2>' +
                          '<h6>Su Mensaje: <br>' +
                          '<i>&ensp; &ensp; &ensp; &ensp; &ensp;"' +  mensajeContacto + '"</i>'+
                          '<br> a sido enviado correctamente</h6>'
                        );
    
    myModal.show();

    $('#nombre-contacto').val('');
    $('#asuntoContacto').val ('Seleccione una opcion');
    $('#mensajeContacto').val ('');

});

// SMOOTH SCROLL

jQuery('.scroll_to').click(function(e){
  var jump = $(this).attr('href');
  var new_position = $(jump).offset();
  $('html, body').stop().animate({ scrollTop: new_position.top }, 800);
  e.preventDefault();
});