const textArea = document.querySelector('.text_input');
const textOut = document.querySelector('.text_output');

// Función para encriptar el texto
function encrypt(textencrypt) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
    ];

    textencrypt = textencrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        textencrypt = textencrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return textencrypt;
}

function botonencrypt() {
    const mensajeencrypt = encrypt(textArea.value);
    textOut.value = mensajeencrypt;
}
