function atualizarHorario() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Formatação para adicionar zeros à esquerda se necessário
    const horaFormatada = hora < 10 ? `0${hora}` : hora; 
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos; // Estrutura condicional simplificada; o "?" é o if 
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

    // Atualiza o conteúdo da span com o horário atual
    document.getElementById('horas').textContent = `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`;
}                                                         // forma 00:00:00
 
// Chama a função inicialmente para exibir o horário assim que a página carrega
atualizarHorario();

// Atualiza o horário a cada segundo
setInterval(atualizarHorario, 1000);
//setInterval(função, tempo);
//Parar
//setTimeout(() => {
//    clearInterval(intervalo);
//}, 5000);

document.getElementById('btn_manha').addEventListener('click', function () {
    document.getElementById('image').setAttribute('src', 'image-H/pexels-artur-roman-1167355.jpg');
    document.body.style.backgroundColor = 'rgb(255, 255, 143)';
});

document.getElementById('btn_tarde').addEventListener('click', function () {
    document.getElementById('image').setAttribute('src', 'image-H/pexels-kehn-hermano-4121708.jpg');
    document.body.style.backgroundColor = 'rgb(251, 185, 72)';
});

document.getElementById('btn_noite').addEventListener('click', function () {
    document.getElementById('image').setAttribute('src', 'image-H/pexels-pixabay-414144.jpg');
    document.body.style.backgroundColor = 'rgb(84, 84, 84)';
});
