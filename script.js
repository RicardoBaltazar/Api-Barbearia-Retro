var phrases = [
    'Hello',
    'all right?',
    'how are you doing?',
    'Where do you live?',
    'what do you study?',
    'do you want to lunch?',
    'do you want to take a walk?',
    'How old are you?',
    'you like dogs?',
    'you like cats?',
    'do you have any dreams?',
]
var result
var button = document.querySelector('#button')

button.addEventListener('click', function(){
    result = [Math.floor(Math.random() * 11)]
    document.querySelector('#paragraph').innerHTML = phrases[result];
})