const pass_word = document.getElementById("password");
const btn = document.getElementById("generate");
const copy_btn = document.getElementById("copy");

const generatePassword = () =>{
  const charS = "ABCDEFEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&()+-*/=[]{}^$";
  let password = "";
  let length = 9;

  for(let i=0;i<length;i++){
    password += charS.charAt(Math.floor(Math.random()*charS.length));
    pass_word.value = password;
  }
}

btn.addEventListener("click",generatePassword);

copy_btn.addEventListener("click",()=>{

const passwordCopy = pass_word.value.trim();
  if(!passwordCopy){
    alert("No password to copy! Please generate a password first.");
    return;
  }
  navigator.clipboard.writeText(passwordCopy)
  .then(()=>{
  alert("Password copied to clipboard!");
  })

  
});