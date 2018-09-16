function submit() {
    var c = document.getElementById("code");
    $.post("https://damp-taiga-13917.herokuapp.com/level3", {code : c.value}, function(data) {
        if(data === "Yes") {
            alert("The day I met the girl with the eyes I can't describe.")
            window.location.href= "https://damp-taiga-13917.herokuapp.com/end";
        }
        else {
            alert("N");
        }
    })
}