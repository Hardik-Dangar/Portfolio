let form = document.forms.login;
let email = document.getElementById('email');
let Subject = document.getElementById('subject');
let name = document.getElementById('namee');
let comment = document.getElementById('comment');

function Show() {
 if(document.forms.login.email.value==""){
   email.style.border = "3px solid red"
 }
 else{
   console.log(email.value);
   email.style.border = "3px solid green"
 }

 if(document.forms.login.Subject.value==""){
    Subject.style.border = "3px solid red"
  }
  else{
    console.log(Subject.value);
    Subject.style.border = "3px solid green"
  }

  if(document.forms.login.namee.value==""){
    namee.style.border = "3px solid red"
  }
  else{
    console.log(namee.value);
    namee.style.border = "3px solid green"
  }

  if(document.forms.login.comment.value==""){
    comment.style.border = "3px solid red"
  }
  else{
    console.log(comment.value);
    comment.style.border = "3px solid green"
  }
}