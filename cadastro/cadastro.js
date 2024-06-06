const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const telefone = document.getElementById('number');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

document.getElementById('btn-cadastro').addEventListener("click", cadastroValidacao);
document.getElementById('firstname').addEventListener("mouseover", inputMouseOver);
document.getElementById('firstname').addEventListener("mouseout", inputMouseOut);
document.getElementById('lastname').addEventListener("mouseover", inputMouseOver);
document.getElementById('lastname').addEventListener("mouseout", inputMouseOut);
document.getElementById('email').addEventListener("mouseover", inputMouseOver);
document.getElementById('email').addEventListener("mouseout", inputMouseOut);
document.getElementById('number').addEventListener("mouseover", inputMouseOver);
document.getElementById('number').addEventListener("mouseout", inputMouseOut);
document.getElementById('password').addEventListener("mouseover", inputMouseOver);
document.getElementById('password').addEventListener("mouseout", inputMouseOut);
document.getElementById('confirmpassword').addEventListener("mouseover", inputMouseOver);
document.getElementById('confirmpassword').addEventListener("mouseout", inputMouseOut);
document.getElementById('btnEntrar').addEventListener("mouseover", inputMouseOver);
document.getElementById('btnEntrar').addEventListener("mouseout", inputMouseOut);

function cadastroValidacao(){
    var reText =  /^([^0-9]*)$/;
    var reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var reNumber = /^[0-9]+$/;
    var formularioCorreto = true;

    if(reText.test(firstname.value) == false || firstname.value == "") {
        firstname.value = "";
        firstname.style.backgroundColor = "red";
        formularioCorreto = false;
    }

    if(reText.test(lastname.value) == false || lastname.value == "") {
        lastname.value = "";
        lastname.style.backgroundColor = "red";
        formularioCorreto = false;
    }

    if(reEmail.test(email.value) == false || email.value == ""){
        email.value = "";
        email.style.backgroundColor = "red";
        formularioCorreto = false;
    }

    if(reNumber.test(telefone.value) == false || telefone.value == ""){
        telefone.value = "";
        telefone.style.backgroundColor = "red";
        formularioCorreto = false;
    }

    if(password.value != confirmpassword.value  || password.value == "" || confirmpassword.value == ""){
        password.value = "";
        password.style.backgroundColor = "red";
        confirmpassword.value = "";
        confirmpassword.style.backgroundColor = "red";
        formularioCorreto = false;
    }
    
    if(formularioCorreto == true) {
        alert("Cadastro realizado com sucesso!");
        window.location.replace("../login/login.html");
    } else {
        alert("Informações incorretas, por favor, preencher corretamente.")
    }
}

function inputMouseOver(event){
    var obj = event.target;
    obj.style.backgroundColor = "#D3D3D3";
}

function inputMouseOut(event){
    var obj = event.target;
    obj.style.backgroundColor = "white";
}