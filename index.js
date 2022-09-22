function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}


function seterror(id, error){
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var allOk = true;
    clearErrors();

    var name = document.forms['myForm']["fullName"].value;

    if (name.length<2){
        seterror("name", "*Length of name is too short");
        allOk = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        allOk = false;
    }

    var email = document.forms['myForm']["Email-ID"].value;
    if (email.length>50){
        seterror("email", "*Email length is too long");
        allOk = false;
    }

    var phone = document.forms['myForm']["PhoneNo"].value;
    if (phone.length>=1 && phone.length<10){
        seterror("phone", "*Phone number should be of 10 digits!");
        allOk = false;
    }

    if (phone.length>10){
        seterror("phone", "*Phone number should be of 10 digits!");
        allOk = false;
    }

    console.log(typeof(phone));

    for(var k =0; k<=phone.length-1; k++){
      if(isNaN(phone)){
        seterror("phone", "*Phone number cannot contain anything other than numbers.");
        allOk = false;
      }
    }



    return allOk;
}




function makeSound(){
  var clickSound = new Audio("audio/click.mp3");
  clickSound.play();
}

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    makeSound();
  });
}






var p = document.getElementById("toggle");

function show(){
  p.classList.toggle("contactMe");
}


document.getElementById("toggler").addEventListener("click",show);
