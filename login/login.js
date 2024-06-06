
document.getElementById("btn-login").addEventListener("click", loginValidacao);
document.getElementById("emailLogin").addEventListener("click",logingClear);
document.getElementById("emailLogin").addEventListener("mouseover",logingHover);
document.getElementById("emailLogin").addEventListener("mouseout",logingClear);
document.getElementById("loginSenha").addEventListener("mouseover",senhaHover);
document.getElementById("loginSenha").addEventListener("mouseout",senhaOut);
document.getElementById("btn-login").addEventListener("mouseover",btnHover);
document.getElementById("btn-login").addEventListener("mouseout",btnOut);

const btn = document.getElementById('btn-login');
const email = document.getElementById('emailLogin');
const senha = document.getElementById('loginSenha');

function loginValidacao(){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(re.test(email.value) == false || senha.value ==""){
        alert("Email ou senha inválidos!");
        email.value = "";
        senha.value = "";
        email.style.backgroundColor = "red";
        senha.style.backgroundColor = "red";
    } else {
        email.style.backgroundColor = "#e5e5e5";
        alert("Login realizado com sucesso!")
        window.location.replace("../projeto/projeto.html");
    }
}

function logingClear(){
    email.style.backgroundColor = "#e5e5e5";
}

function logingHover(){
    email.style.backgroundColor = "#D3D3D3";
}

function senhaHover(){
    senha.style.backgroundColor = "#D3D3D3";
}

function senhaOut(){
    senha.style.backgroundColor = "#e5e5e5";
}

function btnHover(){
    btn.style.backgroundColor = "#D3D3D3";    
}

function btnOut(){
    btn.style.backgroundColor = "#e5e5e5";
}
