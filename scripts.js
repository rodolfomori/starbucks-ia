/* 

    JavaScript NÃO é JAVA

    Variáveis -> Um pedacinho de memória
    do computador, que voce separa e pode
    guardar QUALQUER coisa.

    console.log -> Uma forma de ENXERGA
    o que eu tenho no JavaScript
    Dentro do Navegador

    Funcões - Pedacinho código, QUE
    Só executa, quando é chamado!

    Algoritmo
    [x] Saber quem é o botão
    [x] Saber quando o botão foi clicado
    [x] Saber quem é Bola colorida
    [x] Trocar a cor da Bola colorida  
    [ ] Saber quem é o copo
    [ ] Trocar a imagem do copo
      
    document = HTML
    querySelector = selecionador / pegador / buscador

*/
let circulo = document.querySelector(".circulo")
let imagemCopo = document.querySelector(".imagem-copo")

function mudarCor(cor){

    circulo.style.backgroundColor = cor
}

function trocaImagem(imagem){
    imagemCopo.src = imagem
}






