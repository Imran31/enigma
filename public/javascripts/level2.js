function submit() {
    var c = document.getElementById("code");
    $.post("https://damp-taiga-13917.herokuapp.com/level2", {code : c.value}, function(data) {
        if(data === "Yes") {
            alert("I firmly believe it.");
            window.location.href= "https://damp-taiga-13917.herokuapp.com/level3";
        }
        else {
            alert("No.");
        }
    })
}