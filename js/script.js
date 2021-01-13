$(document).ready(function(){

    $('.with-dropdown').hover(function(){
        $(this).find('.dropdown-menu').toggleClass('active');
        $(this).toggleClass('nero');
        $(this).find('a').toggleClass('black');
    });
    
    $('.with-dropdown-click').click(function(){
        $(this).find('.dropdown-menu.lenguage').toggleClass('active');
        $(this).find('i#arrow-down').toggleClass("fa-arrow-down fa-arrow-up");
        $(this).find('a').toggleClass('black');
    });

    
});

/* <i id="arrow-up" class="fas fa-arrow-up"></i> */
