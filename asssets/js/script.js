// BOOTSTRAP TOOLTIP
 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
 const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

 //LLAMADO AL MODAL

 document.getElementById('botonenviar').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    $('modal-body').select(function () { 
        
    });
    
    myModal.show();
  });