//password toggle

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });










var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

//validation_box box on click


myInput.onfocus = function(){
    document.getElementById("validation_box").style.display ="block";

}

// hide the validation_box box outside of pasword feild

myInput.onblur = function(){

    document.getElementById("validation_box").style.display="none";
}


// when user starts to type something inside the password field

myInput.onkeyup = function(){
    //validate lowercase letters

    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");

    }
}