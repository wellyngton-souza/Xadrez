gerarTabuleiro = () =>{
    var tabuleiroDom = document.querySelector("#tabuleiro");

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let quadrado = document.createElement('div');
            quadrado.setAttribute("id", `i${i}j${j}`);
            quadrado.setAttribute("class", "quadrado");
            tabuleiroDom.appendChild(quadrado);

            if(i % 2 == 0){
                if(j % 2 == 0){
                    quadrado.style.backgroundColor = 'white';
                    quadrado.style.color = 'black';
                } else{
                    quadrado.style.backgroundColor = 'black';
                    quadrado.style.color = 'white';
                }
            } else{
                if(j % 2 == 0){
                    quadrado.style.backgroundColor = 'black';
                    quadrado.style.color = 'white';
                }
                else{
                    quadrado.style.backgroundColor = 'white';
                    quadrado.style.color = 'black';
                }
            }
            quadrado.innerHTML = `i${i}j${j}`;

            //gerarPeao
            if(i == 1){
                let peao = document.createElement('img');
                peao.setAttribute("id", `peao`);
                peao.setAttribute("class", `peca`);
                peao.setAttribute("src", `./assets/dama.png`);
                quadrado.appendChild(peao);
            }
            if(i == 6){
                let peao = document.createElement('img');
                peao.setAttribute("class", `peca pecabranca`);
                peao.setAttribute("src", `./assets/dama.png`);
                quadrado.appendChild(peao);
            }
            //gerarTorre
            if(i == 0 && j == 0 || i == 0 && j == 7){
                let torre = document.createElement('img');
                torre.setAttribute("class", `peca`);
                torre.setAttribute("src", `./assets/torre.png`);
                quadrado.appendChild(torre);
            }
            if(i == 7 && j == 0 || i == 7 && j == 7){
                let torre = document.createElement('img');
                torre.setAttribute("class", `peca pecabranca`);
                torre.setAttribute("src", `./assets/torre.png`);
                quadrado.appendChild(torre);
            }
            //gerarCavalor
            if(i == 0 && j == 1 || i == 0 && j == 6){
                let cavalo = document.createElement('img');
                cavalo.setAttribute("class", `peca`);
                cavalo.setAttribute("src", `./assets/cavalo.png`);
                quadrado.appendChild(cavalo);
            }
            if(i == 7 && j == 1 || i == 7 && j == 6){
                let cavalo = document.createElement('img');
                cavalo.setAttribute("class", `peca pecabranca`);
                cavalo.setAttribute("src", `./assets/cavalo.png`);
                quadrado.appendChild(cavalo);
            }
            //gerarBispo
            if(i == 0 && j == 2 || i == 0 && j == 5){
                let bispo = document.createElement('img');
                bispo.setAttribute("class", `peca`);
                bispo.setAttribute("src", `./assets/bispo.png`);
                quadrado.appendChild(bispo);
            }
            if(i == 7 && j == 2 || i == 7 && j == 5){
                let bispo = document.createElement('img');
                bispo.setAttribute("class", `peca pecabranca`);
                bispo.setAttribute("src", `./assets/bispo.png`);
                quadrado.appendChild(bispo);
            }
            //gerarRei
            if(i == 0 && j == 4){
                let rei = document.createElement('img');
                rei.setAttribute("class", `peca`);
                rei.setAttribute("src", `./assets/rei.png`);
                quadrado.appendChild(rei);
            }
            if(i == 7 && j == 3){
                let rei = document.createElement('img');
                rei.setAttribute("class", `peca pecabranca`);
                rei.setAttribute("src", `./assets/rei.png`);
                quadrado.appendChild(rei);
            }
            //gerarRainha
            if(i == 0 && j == 3){
                let rainha = document.createElement('img');
                rainha.setAttribute("class", `peca`);
                rainha.setAttribute("src", `./assets/rainha.png`);
                quadrado.appendChild(rainha);
            }
            if(i == 7 && j == 4){
                let rainha = document.createElement('img');
                rainha.setAttribute("class", `peca pecabranca`);
                rainha.setAttribute("src", `./assets/rainha.png`);
                quadrado.appendChild(rainha);
            }
        }
    }
}

document.addEventListener('load', gerarTabuleiro());

var tabuleiroDom = document.querySelector("#tabuleiro");
var peao = document.querySelector("#peao");
peao.style.backgroundColor = "blue";

function escolherPeca(e) {
    if(e.target != tabuleiroDom)
    {
        if (e.target.style.backgroundColor == 'black')
        {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
        } else {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
        }
    }
}

tabuleiroDom.addEventListener('click', escolherPeca, false);
