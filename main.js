

//função para chamar a animação
document.querySelector('#submit').addEventListener('click', function(e){
    //e.preventDefault()
    
    document.querySelector('.modal').style.visibility = 'visible'

})

//função para fechar o modal
document.querySelector('#btnClose').addEventListener('click', function(){
    document.querySelector('.modal').style.visibility = 'hidden'
})