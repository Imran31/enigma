function submit() {
    var c = document.getElementById("code");
    $.post("http://localhost:3000/level1", {code : c.value}, function(data) {
        if(data === "Yes") {
            alert("Y");
        }
        else {
            alert("N");
        }
    })
}