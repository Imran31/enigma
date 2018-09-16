function submit() {
    var c = document.getElementById("code");
    $.post("https://damp-taiga-13917.herokuapp.com/level1", {code : c.value}, function(data) {
        if(data === "Yes") {
            alert("Y");
        }
        else {
            alert("N");
        }
    })
}