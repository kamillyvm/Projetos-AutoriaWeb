function TelaLogin(){
    window.location.href = "/TM/Login/index.html";
}

function TelaHome(){
    window.location.href = "/TM/Inicio1/index.html";
}

function TelaCriar(){
    window.location.href = "/TM/Criar/index.html";
}

function TelaAmostra(){
    window.location.href = "/TM/Amostra/index.html";
}

// console.log("carregou")
// let cadastro = document.getElementById("cadastro"); 

// cadastro.addEventListener("submit", (evento) => {
//     evento.preventDefault();

//     let nome = document.getElementById("firstname").value;
//     let sobrenome = document.getElementById("lastname").value;
//     let email = document.getElementById("email").value;
//     let numero = document.getElementById("number").value;
//     let senha = document.getElementById("password").value;
//     let confirmarSenha = document.getElementById("confirmpassword").value;

//     // console.log(nome);
//     // console.log(sobrenome);
//     // console.log(email);
//     // console.log(numero);
//     // console.log(senha);
//     // console.log(confirmarSenha);

//     let usuarios = new Array();
//     if(localStorage.hasOwnProperty("usuarios")){
//         usuarios = JSON.parse(localStorage.getItem("usuarios"));
//     }
//     if(senha === confirmarSenha){
//         usuarios.push({nome, sobrenome, email, numero, senha}); // os nomes das chaves são iguais ao valores, entao podemos exemplificar dessa forma
//         localStorage.setItem("usuarios", JSON.stringify(usuarios));       
//     }
//     else{
//         alert("Senhas diferentes");
//         window.location.href = "/TM/Cadastro/index.html";
//     } 
// });



function realizarLogin(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    let usuarioLocalizado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if(usuarioLocalizado){
        alert("Login bem-sucedido!");
        window.location.href = "/TM/Inicio1/index.html";;
    }
    else{
        alert("E-mail ou senha incorretos!");
    }
}