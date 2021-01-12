$(document).ready(function(){

    $('.with-dropdown').hover(function(){
        $(this).find('.dropdown-menu').toggleClass('active');
    });

    $('.with-dropdown-click').click(function(){
        $(this).find('.dropdown-menu.lenguage').toggleClass('active');
    });
});