//função para chamar a animação
document.querySelector('#submit').addEventListener('click', function(){
    if(document.querySelector('#email').value == '' || document.querySelector('#pass').value == ''){
        alert('Dados inválidos')
    } else {
        document.querySelector('.modal').style.visibility = 'visible'
        document.querySelector('#email').value = ''
        document.querySelector('#pass').value = ''
    }
})

//função para fechar o modal
document.querySelector('#btnClose').addEventListener('click', function(){
    document.querySelector('.modal').style.visibility = 'hidden'
})

