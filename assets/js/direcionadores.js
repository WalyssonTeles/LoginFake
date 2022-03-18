function irPara__Login(){
    let cadastro = document.querySelector('.secao__Cadastro')
    let login = document.querySelector('.secao__Login')
    let perfil = document.querySelector('.secao__Perfil')
    let EncontrarUsuario = document.querySelector('.secao__EncontrarUsuario')
    let RedefinirSenha = document.querySelector('.secao__RedefinirSenha')
    login.classList.remove('displayOFF')
    cadastro.classList.add('displayOFF')
    perfil.classList.add('displayOFF')
    EncontrarUsuario.classList.add('displayOFF')
    RedefinirSenha.classList.add('displayOFF')
    
    let erroMensagem__Login = document.querySelector('#erroMensagem__Login')
    erroMensagem__Login.style.color = 'transparent'
    
    let usuario = document.querySelector('#usuario__Login')
    let senha = document.querySelector('#senha__Login')
    
    limparTudo(usuario,senha)
    
    arrayIndice = -10 
    
}

function irPara__Cadastro(){
    let cadastro = document.querySelector('.secao__Cadastro')
    let login = document.querySelector('.secao__Login')
    let perfil = document.querySelector('.secao__Perfil')
    let EncontrarUsuario = document.querySelector('.secao__EncontrarUsuario')
    let RedefinirSenha = document.querySelector('.secao__RedefinirSenha')
    cadastro.classList.remove('displayOFF')
    login.classList.add('displayOFF')
    perfil.classList.add('displayOFF')
    EncontrarUsuario.classList.add('displayOFF')
    RedefinirSenha.classList.add('displayOFF')
    
    let nomeC = document.querySelector('#PrimeiroNome')
    let sobrenomeC = document.querySelector('#Sobrenome')
    let usuarioC = document.querySelector('#nomeUsuario__Cadastro')
    let senhaC = document.querySelector('#senha__Cadastro')
    let confirmacaoC = document.querySelector('#confirmarSenha__Cadastro')

    let erroMensagem__Cadastro = document.querySelector('#erroMensagem__Cadastro')

    erroMensagem__Cadastro.innerHTML = ''
    
    limparTudo(nomeC, sobrenomeC)
    limparTudo(usuarioC,senhaC)
    nomeC.value = 'abc'
    erro_Alerta(nomeC)
    limparTudo(confirmacaoC, nomeC)

    
}

function irPara__Perfil(){
   let login = document.querySelector('.secao__Login')
    let perfil = document.querySelector('.secao__Perfil')
    perfil.classList.remove('displayOFF')
    login.classList.add('displayOFF')

    let usuarioP = document.querySelector('#usuario__Peril')
    let nomeP = document.querySelector('#nome__Perfil')
    let senhaP = document.querySelector('#senha__Perfil')

    usuarioP.innerHTML = '@' + usuarioPremium[arrayIndice].nomeUsuario
    nomeP.innerHTML = usuarioPremium[arrayIndice].primeiroNome + ' ' + usuarioPremium[arrayIndice].sobrenome
    senhaP.innerHTML = usuarioPremium[arrayIndice].senhaUsuario

    arrayIndice = -10    
}

function irPara_EncontrarUsuario(){
    let login = document.querySelector('.secao__Login')
    let EncontrarUsuario = document.querySelector('.secao__EncontrarUsuario')
    EncontrarUsuario.classList.remove('displayOFF')
    login.classList.add('displayOFF')

    let nomeUsuario__EncontrarUsuario = document.querySelector('#nomeUsuario__EncontrarUsuario')
    let erroMensagem__EncontrarUsuario = document.querySelector('#erroMensagem__EncontrarUsuario')

    nomeUsuario__EncontrarUsuario.value = ''
    nomeUsuario__EncontrarUsuario.style.borderColor = '#969595'

    erroMensagem__EncontrarUsuario.innerHTML = ''
}

function irPara_RedefinirSenha(){
    let RedefinirSenha = document.querySelector('.secao__RedefinirSenha')
    let EncontrarUsuario = document.querySelector('.secao__EncontrarUsuario')
    RedefinirSenha.classList.remove('displayOFF')
    EncontrarUsuario.classList.add('displayOFF')

    let senha__RedefinirSenha = document.querySelector('#senha__RedefinirSenha')
    let confirmarSenha__RedefinirSenha = document.querySelector('#confirmarSenha__RedefinirSenha')
    let erroMensagem__RedefinirSenha = document.querySelector('#erroMensagem__RedefinirSenha')
    
    erroMensagem__RedefinirSenha.innerHTML = ''

    limparTudo(senha__RedefinirSenha, confirmarSenha__RedefinirSenha)
}