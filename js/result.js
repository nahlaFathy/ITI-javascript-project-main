
function result() {

    console.log(getCookie("firstname"))
    if ((getCookie("timeout") == "no")) {
        $("#bg").css({
            "background-image": "url('images/1.gif')",

        });
        $("#1").append("You Did it Before Time Out ...");
        $("#2").append("Wish you best of lucks .. stay tuned");
        $("#grade").append(getCookie("firstname"), " You Got : ", getCookie("grade"), "/10");
    }
    else {
        $("#bg").css({
            "background-image": "url('images/tenor1.gif')",
        });
        $("#msg").css({
            "color": " white",

        })
        $("#1").append("SORRY !!");
        $("#2").append("TIME IS UP");
        $("#grade").append(getCookie("firstname"), " You Got : ", getCookie("grade"), "/10");
    }
}
function Again() {
    location.replace("login.html");
}

function relocat() {

    var x = getCookie("count");
    var x = parseInt(x);
    if (x == 1) {
        location.replace("login.html");
    }
    else
        setCookie("count", x + 1);

}
