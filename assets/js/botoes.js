function entrarLogin(event){
    event.preventDefault()

    if(validadorLogin()){
        irPara__Perfil()
    }   
}

function salvarCadastro(event){
    event.preventDefault()
    
    if(validadorCadastro()){
        usuarioPremium.push(
            {
                primeiroNome: document.querySelector('#PrimeiroNome').value,
                sobrenome: document.querySelector('#Sobrenome').value,
                nomeUsuario: document.querySelector('#nomeUsuario__Cadastro').value,
                senhaUsuario: document.querySelector('#senha__Cadastro').value, 
            }
        )
        irPara__Login()
    }
    
}

function proximoEncontrarUsuario(event){
    event.preventDefault()

    if(validadorEncontrarUsuario()){
        irPara_RedefinirSenha()
    }
}

function confirmarRedefinirSenha(event){
    event.preventDefault()

    if(validadorRedefinirSenha()){
        let senhaRC = document.querySelector('#senha__RedefinirSenha')

        usuarioPremium[arrayIndice].senhaUsuario = senhaRC.value

        irPara__Login()
    }
}
