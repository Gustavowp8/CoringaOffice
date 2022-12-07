function aviso(){
    //alert('Indiponivel')

    var email = document.getElementById('email').value;
    var passas = document.getElementById('pass').value;

    if(email == "" || passas == ""){
        alert('Negado')
    }
    else if(email != "adm@adm.com" || passas != "123456"){
        alert('E-mail errado ou senha')
    }
    else if(email == "adm@adm.com" || passas == "123456"){
        alert('O banco de dados esta desativado!')
        location="painel.html"
    }
}

function cSair(){
    var sair = confirm('Tem certeza que deseja sair ?')
    if(sair == true){
        location='index.html'
    }
}

function sAvd(){
    alert('Sem acesso ao banco, fale com o programador!')
}

function config(){
    alert('Configuração disponivel somente na proxima atualização!')
}

function fechaAviso(){
    sobre.style.display='none'
}

function chamaMenu(){
    menu.style.display="block"
}

function contaN(){
    alert('Para criar uma nova conta falei com o administrador')
}

function fecha(){
    avisoUm.style.display = 'none'
}

function recur(){
    avisoUm.style.display = 'block'
}