function convert() {
    const binary = document.querySelector('#binario').value;
    if (binary === '') return alert('Valor inválido!  Por favor, digite um número binário');
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Valor inválido!  Por favor, digite um número binário');
    });
    const decimal = parseInt(binary, 2);
    document.querySelector('#decimal').value = decimal;
    return true;
};