function setError(input,message){
    input.style.border = "1px solid red";
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector("small");
    small.className = "smallshown";
    small.innerHTML = message;
    let submitbtn=document.getElementById("submit");
    submitbtn.disabled=true;

}
function setSuccess(input){
    input.style.border = "1px solid green";
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector("small");
    small.className = "smallhidden";
    small.innerHTML = "";
    let submitbtn=document.getElementById("submit");
    submitbtn.disabled=false;   


}
function emailvalid(){
    let emailid=document.getElementById("emailid");
    if(emailid.value.trim()===""){
        setError(emailid,"Email is required");
    }
    else{
        setSuccess(emailid);
    }
}

function passwordvalid(){
    let password=document.getElementById("password");
    if(password.value.trim()===""){
        setError(password,"Password is required");
    }
    else{
        setSuccess(password);
    }
}


