$(document).ready(function(){
$("#barras").click(function(){
  if ($("#menu").hasClass("menu-ativo")){
       $("#menu").removeClass("menu-ativo")
  }else{
    $("#menu").addClass("menu-ativo")
  }
  
})
   
})

function entrar(){
var logado = 0;
var usuario = document.getElementById("usuario").value;
var senha = document.getElementById("senha").value;

if(usuario == 'teste' && senha == '123'){
window.location = "../index.html";
logado = 1;
}

if(logado == 0){
alert("Acesso Negado. Dados Incorretos");

}

}
   
$(document).ready(function(){

$("#botao-cadastrar").click(function(){

$("#form-cadastrar").slideToggle("slow");
$("#section-login").slideToggle("slow");
$("#botao-cadastrar").hide();


});


});

function login(){

    alert("Precisa estar logado para comprar, faça seu cadrastro ou login")
    window.location.href = "conta.html";
 

}

function cadastro(){
alert("Cadastrado com Sucesso!");
window.location.href = "../index.html";




}

function login1(){

    alert("Precisa estar logado para comprar, faça seu cadrastro ou login")
    window.location.href = "pages/conta.html";
 

}


function fazendo(){

    alert("Area em construcao")
}

function comopaga(){

    alert("Pix 10% desconto, aceitamos cartoes 10x sem juros")
}



function vermenu($event){
    //identificar elemento menu
let menu = document.getElementById("menu")

if(getComputedStyle(menu).display == "none"){
    menu.style.display = "flex"
}else{
    menu.style.display = "none"
   
    
}

event.preventDefault()

}