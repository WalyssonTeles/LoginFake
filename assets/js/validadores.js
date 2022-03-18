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
            
            usuarioPremium.forEach((item, indice) => {
                if (item.nomeUsuario === vUsuario.value){
                    arrayIndice = indice
                }                    
            })

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

        usuarioPremium.forEach((item, indice) => {
            if (item.nomeUsuario === usuario_Campo.value){
                arrayIndice = indice
            }                    
        })

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