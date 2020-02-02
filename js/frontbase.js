
$(document).ready(function () {

    $('.alert-toggle').click(function () {
        $(this).fadeOut();
    });


    $('.modal').click(function (event) {
        const modal = $(this);
        const element = $(event.target).parent();
        console.log(modal.className);
        console.log(element);
    });


    // $('.modal .card').click(function () {
    //     console.log(this);
    // });

});


function openModal(modalId) {
    $('#' + modalId).addClass('active');
}