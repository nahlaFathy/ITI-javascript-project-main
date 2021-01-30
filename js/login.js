
var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var myform = document.getElementById("myform");
var email, password;
myform.onsubmit = function (event) {
  event.preventDefault();
  email = document.forms["myform"]["email"].value;
  if (email == "") {
    para1.textContent = "*please fill out this field!!";
    document.forms["myform"]["email"].focus();
    return false;
  }
  else if (email != getCookie("email")) {
    para1.textContent = " Not Exist!!"
    document.forms["myform"]["email"].focus();
    return false;
  }
  else {
    para1.textContent = "";
  }
  //////////////////////////////////////password/////////////////////////
  password = document.forms["myform"]["password"].value;
  if (password == "") {
    para2.textContent = " *please fill out this field !!"
    document.forms["myform"]["password"].focus();
    return false;

  }
  else if (password != getCookie("password")) {
    para2.textContent = "password is not correct";
    document.forms["myform"]["password"].focus();
    return false;

  }
  else {
    para2.textContent = "";
    para1.textContent = "";
    document.forms["myform"]["email"].value = "";
    document.forms["myform"]["password"].value = "";
    para2 = textContent = " ";
    location.replace("home.html");
  }


}




