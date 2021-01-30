
var fname, lname, email, password, confirmpassword;
var myform = document.forms["myform"];

var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var para4 = document.getElementById("para4");
var para5 = document.getElementById("para5");
var para6 = document.getElementById("para6");

myform.onsubmit = function (event) {
  event.preventDefault();
  //////////////////////////////////fname/////////////////////////////////////////////////
  fname = document.forms["myform"]["fname"].value;
  if (!/^[a-zA-Z]+$/.test(fname)) {
    para1.textContent = "*Enter valid Name !!";
    document.forms["myform"]["fname"].focus();
  }
  else {
    para1.textContent = "";
  }
  ///////////////////////////////////lname/////////////////////////////////////////////////////// 
  lname = document.forms["myform"]["lname"].value;
  if (!/^[a-zA-Z]+$/.test(lname)) {
    para2.textContent = "*Enter Last Name !!";
    document.forms["myform"]["lname"].focus();
  }
  else {
    para2.textContent = "";
  }
  /////////////////////////////////////email///////////////////////////////////////
  email = document.forms["myform"]["email"].value;
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    para3.textContent = "*enter valid email"
    document.forms["myform"]["email"].focus();
  }
  else {
    para3.textContent = "";
  }
  //////////////////////////////////////password/////////////////////////
  password = document.forms["myform"]["password"].value;
  if (password == "") {
    para4.textContent = " *please fill out this field !!"
    document.forms["myform"]["password"].focus();
  }
  else if (password.length < 8) {
    para4.textContent = "must be 8 characters or longer";
    document.forms["myform"]["password"].focus();

  }
  else {
    para4.textContent = "";
  }
  //////////////////////////////////////confirmPassword/////////////////////////
  confirmpassword = document.forms["myform"]["confirmpassword"].value;
  if (confirmpassword != password || confirmpassword == '') {
    para5.textContent = "Password did not match";
    document.forms["myform"]["confirmpassword"].focus();
  }
  else {
    para5.textContent = "";
  }

  if(para1.textContent == "" && para2.textContent == "" && para3.textContent == "" && para4.textContent =="" && para5.textContent == ""){
    setCookie("firstname", fname, "expires=Thu, 20 Dec 2020 12:00:00 UTC;");
    setCookie("lastname", lname, "expires=Thu, 20 Dec 2020 12:00:00 UTC;");
    setCookie("password", password, "expires=Thu, 20 Dec 2020 12:00:00 UTC;");
    setCookie("email", email, "expires=Thu, 20 Dec 2020 12:00:00 UTC;");
    document.forms["myform"]["fname"].value = "";
    document.forms["myform"]["lname"].value = "";
    document.forms["myform"]["email"].value = "";
    document.forms["myform"]["password"].value = "";
    document.forms["myform"]["confirmpassword"].value = "";
    location.href='login.html';
  }

}
///////////////////////////////////////////////////////////////////////////////////////




function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}








