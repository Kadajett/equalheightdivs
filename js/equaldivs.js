$(document).ready(function() {
    var divone = $(".one").height();
    var divtwo = $(".two").height();
    
    var maxdiv = Math.max(divone, divtwo);
    
    $(".one").height(maxdiv);
});
