$(document).ready(function() {
    $('.navbar-toggle').click(function() {
        var menuItems = '<ul class="nav navbar-nav">' +
            '<li><a href="#">Chicken</a></li>' +
            '<li><a href="#">Beef</a></li>' +
            '<li><a href="#">Sushi</a></li>' +
            '</ul>';
        $('#navbar-collapse').html(menuItems);
    });
});