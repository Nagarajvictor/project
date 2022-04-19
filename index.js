const signup=document.getElementById("form1");
signup.style.display="none";

const login=document.getElementById("login");
const loginbtn=document.getElementById("loginBtn");
const signupbtn=document.getElementsByClassName("signup");
function loginToSignup(){
      login.style.display="none";
      signup.style.display="block";
}
function signupToLogin(){
    login.style.display="block";
    signup.style.display="none";
}
const reset=document.getElementById("reset");
reset.style.display="none";

function forgetpwToReset(){
    reset.style.display="block";
    login.style.display="none";
}

const otp=document.getElementById("otp");
otp.style.display="none";
function resetToOtp(){
    otp.style.display="block";
    reset.style.display="none"; 
}

const recreate=document.getElementById("recreate");
recreate.style.display="none";
function otpToRecreate(){
    recreate.style.display="block";
    otp.style.display="none";
}
function toLogin(){
    recreate.style.display="none";
    login.style.display="block";
}


