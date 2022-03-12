var arrayIndice = -10
var primeiroNome
var sobrenome
var nomeUsuario
var senhaUsuario
var usuarioPremium = [
    {
        primeiroNome: 'Usuario',
        sobrenome: 'Padrão',
        nomeUsuario: 'usuariopadrao',
        senhaUsuario: '123', 
    }
]

//*** BOTÕES ***
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


//*** VALIDADORES
function validadorCadastro(){
    arrayIndice = -10
    let vNome = document.querySelector('#PrimeiroNome')
    let vSobrenome = document.querySelector('#Sobrenome')
    let vUsuario = document.querySelector('#nomeUsuario__Cadastro')
    let vSenha = document.querySelector('#senha__Cadastro')
    let vConfirmacao = document.querySelector('#confirmarSenha__Cadastro')
    
    let erroMensagem__Cadastro = document.querySelector('#erroMensagem__Cadastro')
    
    if(vNome.value === '' && vSobrenome.value === '' && vUsuario.value === '' && vSenha.value === '' && vConfirmacao.value === ''){
        erro_Alerta(vNome)
        erro_Alerta(vSobrenome)
        erro_Alerta(vUsuario)
        erro_Alerta(vSenha)
        erro_Alerta(vConfirmacao)
        erroMensagem__Cadastro.innerHTML = 'Preenchimento Obrigatório!'
        erroMensagem__Cadastro.style.color = '#e60505'
        
    }else{
        semErro(vNome)
        semErro(vSobrenome)
        semErro(vUsuario)
        semErro(vSenha)
        semErro(vConfirmacao)
        erroMensagem__Cadastro.innerHTML = ''
        erroMensagem__Cadastro.style.color = 'transparent'
        
        if(vNome.value === '' || vSobrenome.value === ''){
            erro_Alerta(vNome)
            erro_Alerta(vSobrenome)
            erroMensagem__Cadastro.innerHTML = 'Preenchimento Obrigatório!'
            erroMensagem__Cadastro.style.color = '#e60505'
        }else{
            semErro(vNome)
            semErro(vSobrenome)
            erroMensagem__Cadastro.innerHTML = ''
            erroMensagem__Cadastro.style.color = 'transparent'
            
            for (i = 0; i < usuarioPremium.length; i++){
                if(usuarioPremium[i].nomeUsuario === vUsuario.value){
                    arrayIndice = i
                }
            }

            if(arrayIndice > -1){
                erroMensagem__Cadastro.innerHTML = 'Usuário já cadastrado!'
                erroMensagem__Cadastro.style.color = '#e60505'
                erro_Alerta(vUsuario)                
                
            }else if(vUsuario.value === ''){
                erroMensagem__Cadastro.innerHTML = 'Preenchimento Obrigatório!'
                erroMensagem__Cadastro.style.color = '#e60505'
                erro_Alerta(vUsuario)
            }else{
                erroMensagem__Cadastro.innerHTML = ''
                erroMensagem__Cadastro.style.color = 'transparent'
                semErro(vUsuario)
                if(vSenha.value != vConfirmacao.value){
                    erroMensagem__Cadastro.innerHTML = 'Senha e confirmação não batem'
                    erroMensagem__Cadastro.style.color = '#e60505'
                    erro_Alerta(vSenha)
                    erro_Alerta(vConfirmacao)
                    
                }else if(vSenha.value === '' || vConfirmacao.value === ''){
                    erroMensagem__Cadastro.innerHTML = 'Preenchimento Obrigatório!'
                    erroMensagem__Cadastro.style.color = '#e60505'
                    erro_Alerta(vSenha)
                    erro_Alerta(vConfirmacao)
                    
                }
                else{
                    erroMensagem__Cadastro.innerHTML = ''
                    erroMensagem__Cadastro.style.color = 'transparent'
                    semErro(vSenha)
                    semErro(vConfirmacao)

                    
                    
                    return true
                }
            }                    
        }  
    }
}

function validadorLogin(){
    let usuario_Campo = document.querySelector('#usuario__Login') 
    let senha_Campo = document.querySelector('#senha__Login')
    let erroMensagem__Login = document.querySelector('#erroMensagem__Login')
    
    if(usuario_Campo.value === '' || senha_Campo.value === ''){
        erroMensagem__Login.innerHTML = 'Preencha os campos'
        erroMensagem__Login.style.color = '#e60505'
        erro_Alerta(usuario_Campo)
        erro_Alerta(senha_Campo)
    }else {
        erroMensagem__Login.innerHTML = 'Usuário ou senha incorreto!'
        erroMensagem__Login.style.color = 'transparent'

        for (i = 0; i < usuarioPremium.length; i++){
            if(usuarioPremium[i].nomeUsuario === usuario_Campo.value){
                arrayIndice = i
            }
        }

        if(arrayIndice < 0){
            erroMensagem__Login.style.color = '#e60505'
        }else{
            if(senha_Campo.value != usuarioPremium[arrayIndice].senhaUsuario){
                erroMensagem__Login.style.color = '#e60505'
                erro_Alerta(usuario_Campo)
                erro_Alerta(senha_Campo)
            }else{
                erroMensagem__Login.style.color = 'transparent'
                semErro(usuario_Campo)
                semErro(senha_Campo)
                
                return true        
            }
        }
        
    }
}

function validadorEncontrarUsuario(){
    let usuarioE = document.querySelector('#nomeUsuario__EncontrarUsuario')
    let erroMensagem__EncontrarUsuario = document.querySelector('#erroMensagem__EncontrarUsuario')
    
    arrayIndice = -10

    for(i = 0; i < usuarioPremium.length; i++){
        if(usuarioE.value === usuarioPremium[i].nomeUsuario){
            arrayIndice = i
        }
    }

    if(usuarioE.value === ''){
        erroMensagem__EncontrarUsuario.innerHTML = 'Por favor, preencha o campo informado!'
        erro_Alerta(usuarioE)
    }else if(arrayIndice < -1){
        erro_Alerta(usuarioE)
        erroMensagem__EncontrarUsuario.innerHTML = 'Usuário não encontrado!'
    }else{
        let erroMensagem__EncontrarUsuario = document.querySelector('#erroMensagem__EncontrarUsuario')
        erroMensagem__EncontrarUsuario.innerHTML = ''
        semErro(usuarioE)
        return true
    }
}

function validadorRedefinirSenha(){
    let senhaRC = document.querySelector('#senha__RedefinirSenha')
    let confirmarRC = document.querySelector('#confirmarSenha__RedefinirSenha')
    let erroMensagemRC = document.querySelector('#erroMensagem__RedefinirSenha')

    if(senhaRC.value === '' || confirmarRC.value === ''){
        erroMensagemRC.innerHTML = 'Preenchimento Obrigatório!'
        erroMensagemRC.style.color = '#e60505'
        erro_Alerta(senhaRC)
        erro_Alerta(confirmarRC)
        
    } else if(senhaRC.value !== confirmarRC.value){
        erroMensagemRC.innerHTML = 'Senha e confirmação não batem'
        erroMensagemRC.style.color = '#e60505'
        erro_Alerta(senhaRC)
        erro_Alerta(confirmarRC)
    } else if (senhaRC.value === usuarioPremium[arrayIndice].senhaUsuario){
        erroMensagemRC.innerHTML = 'A nova senha não pode ser igual a anterior!'
        erroMensagemRC.style.color = '#e60505'
        erroMensagemRC.style.height = 'auto'
        erro_Alerta(senhaRC)
        erro_Alerta(confirmarRC)
    } else{
        erroMensagemRC.innerHTML = ''
        semErro(senhaRC)
        semErro(confirmarRC)        
        
        return true
    }
}

//*** DIRECIONADORES
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
    
    senha__RedefinirSenha.value = ''
    senha__RedefinirSenha.style.borderColor = '#afaeae'
    confirmarSenha__RedefinirSenha.value = ''
    confirmarSenha__RedefinirSenha.style.borderColor = '#afaeae'
    erroMensagem__RedefinirSenha.innerHTML = ''
}


//*** ERROS E DEFAULTS
function erro_Alerta(codigo){
    codigo.style.borderColor = '#e60505'
    codigo.style.color = '#e60505'
}

function semErro(codigo){
    codigo.style.borderColor = '#afaeae'
    codigo.style.color = 'black'
}

function limparTudo(a, b){
    semErro(a)
    semErro(b)
    a.value = ''
    b.value = ''
}