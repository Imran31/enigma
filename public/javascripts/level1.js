function submit() {
    var c = document.getElementById("code");
    $.post("https://damp-taiga-13917.herokuapp.com/level1", {code : c.value}, function(data) {
        if(data === "Yes") {
            alert("You are probably the most interesting person but terrible at bowling.")
            window.location.href= "https://damp-taiga-13917.herokuapp.com/level2";
        }
        else {
            alert("N");
        }
    })
}