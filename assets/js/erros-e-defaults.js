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