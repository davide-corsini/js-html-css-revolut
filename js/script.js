$(document).ready(function(){

    $('.with-dropdown').hover(function(){
        $(this).find('.dropdown-menu').toggleClass('active');
    });
    
    $('.with-dropdown-click').click(function(){
        $(this).find('.dropdown-menu.lenguage').toggleClass('active');
        $(this).find('i#arrow-down').toggleClass("fa-arrow-down fa-arrow-up")
    });
});

/* <i id="arrow-up" class="fas fa-arrow-up"></i> */
