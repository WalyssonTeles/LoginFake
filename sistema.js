var arrayIndice = 0
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

function proximoEsqueceu(event){
    event.preventDefault()

    if(validadorEsqueceu()){
        irPara_RecuperarSenha()
    }
}

function confirmarRecuperarSenha(event){
    event.preventDefault()

    if(validadorRecuperarSenha()){
        let senhaRC = document.querySelector('#senha__RecuperarSenha')

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

function validadorEsqueceu(){
    let usuarioE = document.querySelector('#nomeUsuario__Esqueceu')
    let erroMensagem__Esqueceu = document.querySelector('#erroMensagem__Esqueceu')
    
    arrayIndice = -10

    for(i = 0; i < usuarioPremium.length; i++){
        if(usuarioE.value === usuarioPremium[i].nomeUsuario){
            arrayIndice = i
        }
    }

    if(usuarioE.value === ''){
        erroMensagem__Esqueceu.innerHTML = 'Por favor, preencha o campo informado!'
        erro_Alerta(usuarioE)
    }else if(arrayIndice < -1){
        erro_Alerta(usuarioE)
        erroMensagem__Esqueceu.innerHTML = 'Usuário não encontrado!'
    }else{
        let erroMensagem__Esqueceu = document.querySelector('#erroMensagem__Esqueceu')
        erroMensagem__Esqueceu.innerHTML = ''
        semErro(usuarioE)
        return true
    }
}

function validadorRecuperarSenha(){
    let senhaRC = document.querySelector('#senha__RecuperarSenha')
    let confirmarRC = document.querySelector('#confirmarSenha__RecuperarSenha')
    let erroMensagemRC = document.querySelector('#erroMensagem__RecuperarSenha')

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
    let esqueceu = document.querySelector('.secao__Esqueceu')
    let recuperarSenha = document.querySelector('.secao__RecuperarSenha')
    login.classList.remove('displayOFF')
    cadastro.classList.add('displayOFF')
    perfil.classList.add('displayOFF')
    esqueceu.classList.add('displayOFF')
    recuperarSenha.classList.add('displayOFF')
    
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
    let esqueceu = document.querySelector('.secao__Esqueceu')
    let recuperarSenha = document.querySelector('.secao__RecuperarSenha')
    cadastro.classList.remove('displayOFF')
    login.classList.add('displayOFF')
    perfil.classList.add('displayOFF')
    esqueceu.classList.add('displayOFF')
    recuperarSenha.classList.add('displayOFF')
    
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

function irPara_EsqueceuSenha(){
    let login = document.querySelector('.secao__Login')
    let esqueceu = document.querySelector('.secao__Esqueceu')
    esqueceu.classList.remove('displayOFF')
    login.classList.add('displayOFF')

    let nomeUsuario__Esqueceu = document.querySelector('#nomeUsuario__Esqueceu')
    let erroMensagem__Esqueceu = document.querySelector('#erroMensagem__Esqueceu')

    nomeUsuario__Esqueceu.value = ''
    nomeUsuario__Esqueceu.style.borderColor = '#969595'

    erroMensagem__Esqueceu.innerHTML = ''
}

function irPara_RecuperarSenha(){
    let recuperarSenha = document.querySelector('.secao__RecuperarSenha')
    let esqueceu = document.querySelector('.secao__Esqueceu')
    recuperarSenha.classList.remove('displayOFF')
    esqueceu.classList.add('displayOFF')

    let senha__RecuperarSenha = document.querySelector('#senha__RecuperarSenha')
    let confirmarSenha__RecuperarSenha = document.querySelector('#confirmarSenha__RecuperarSenha')
    let erroMensagem__RecuperarSenha = document.querySelector('#erroMensagem__RecuperarSenha')
    
    senha__RecuperarSenha.value = ''
    senha__RecuperarSenha.style.borderColor = '#afaeae'
    confirmarSenha__RecuperarSenha.value = ''
    confirmarSenha__RecuperarSenha.style.borderColor = '#afaeae'
    erroMensagem__RecuperarSenha.innerHTML = ''
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