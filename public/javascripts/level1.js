function submit() {
    var c = document.getElementById("code");
    $.post("https://damp-taiga-13917.herokuapp.com/level1", {code : c.value}, function(data) {
        if(data === "Yes") {
            alert("Impressive. Let's see if you can keep up.");
            window.location.href= "https://damp-taiga-13917.herokuapp.com/level2";
        }
        else {
            alert("N");
        }
    });
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
}