document.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento do campo de texto
    const campoTexto = document.getElementById('horario');
    
    const tonsWall = document.getElementsByTagName('body')
    // Foca automaticamente no campo de texto
    campoTexto.focus();
});
if (campoTexto.value >= 0 || campoTexto.value <= 6) {
    tonsWall.style.backgroundColor = orange
}
if (campoTexto.value >= 6 || campoTexto.value <= 12) {
    tonsWall.style.backgroundColor = blue
}