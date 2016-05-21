$('#id-rubiks').unbind('click').click(function (e) {
    e.preventDefault();
    $("#mainContent").load("rubiks.html");
});


$('#id-database').unbind('click').click(function (e) {
    e.preventDefault();
    $("#mainContent").load("database.html");
});

$( document ).ready(function() {
    $("#mainContent").load("database.html");
});