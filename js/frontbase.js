
$(document).ready(function () {

    $('.alert-toggle').click(function () {
        $(this).fadeOut();
    });


    $('.modal').click(function (event) {
        const modal = $(this).children().get(0);
        const element = $(event.target).parent().get(0);
        if(modal !== element)
            $(this).removeClass('active');
    });

    $('.modal-close-btn').click(function () {
        $(this).closest('.modal').removeClass('active');
    });

});


function openModal(modalId) {
    $('#' + modalId).addClass('active');
}