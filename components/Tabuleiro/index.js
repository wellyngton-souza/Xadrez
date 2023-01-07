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

            //exibe o id (visualmente)
            //quadrado.innerHTML = `i${i}j${j}`;

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
                peao.setAttribute("id", `peaobranco`);
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

const apagapeca = (pecadeletada) =>{
    if(document.getElementById('pecaselecionada').innerHTML == '1'){
        let posivelposicao = pecadeletada.id.split("");
        let posivelposicaoy = posivelposicao[3];
        let posivelposicaox = posivelposicao[1];
        posivelposicao = parseInt(posivelposicaox);
        posivelposicao+= -1;

        posivelposicao = "i"+posivelposicao+"j"+posivelposicaoy;
        let pecaremovida = document.getElementById(posivelposicao);
        console.log("peça removida: " + posivelposicao);
        pecaremovida.removeChild(pecaremovida.firstChild);
        //document.getElementById(posivelposicao).removeChild(document.get);
    }
    if(document.getElementById('pecaselecionada').innerHTML == '2'){
        let posivelposicao = pecadeletada.id.split("");
        let posivelposicaoy = posivelposicao[3];
        let posivelposicaox = posivelposicao[1];
        posivelposicao = parseInt(posivelposicaox);
        posivelposicao++;

        posivelposicao = "i"+posivelposicao+"j"+posivelposicaoy;
        let pecaremovida = document.getElementById(posivelposicao);
        console.log("peça removida: " + posivelposicao);
        pecaremovida.removeChild(pecaremovida.firstChild);
        //document.getElementById(posivelposicao).removeChild(document.get);
    }
}

const voltarcor = (quadrado) =>{
    let posit = quadrado.id;
    let posivelposicaoS = posit.split("");
    let posivelposicaoSX = posivelposicaoS[3];
    let posivelposicaoSY = posivelposicaoS[1];

    if((parseInt(posivelposicaoSX) + parseInt(posivelposicaoSY)) % 2){
        quadrado.style.backgroundColor = "black";
    } else{
        quadrado.style.backgroundColor = "white";
    }
    apagapeca(quadrado);
}

const escolherPeca = (e) => {
    if(e.target != tabuleiroDom)
    {
        if(e.target.id == "peao")
        {
            let posivelposicao = e.target.parentNode.id.split("");
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            posivelposicao = parseInt(posivelposicaox);
            posivelposicao ++;

            if((posivelposicao + parseInt(posivelposicaoy)) % 2){
                var arroz = "black";
            } else{
                var arroz = "white";
            }

            console.log("cor armazenada: " + arroz);

            posivelposicao = "i"+posivelposicao+"j"+posivelposicaoy;

            let laranja = document.getElementById('posicao');
            laranja.innerHTML = posivelposicao;
            document.getElementById('pecaselecionada').innerHTML = "1";

            if(document.getElementById(posivelposicao).style.backgroundColor == "blue"){
                document.getElementById(posivelposicao).style.backgroundColor = arroz;
            } else{
                document.getElementById(posivelposicao).style.backgroundColor = "blue";
            }
        }
        if(e.target.id == "peaobranco")
        {
            let posivelposicao = e.target.parentNode.id.split("");
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            posivelposicao = parseInt(posivelposicaox);
            posivelposicao += -1;

            if((posivelposicao + parseInt(posivelposicaoy)) % 2){
                var arroz = "black";
            } else{
                var arroz = "white";
            }

            console.log("cor armazenada: " + arroz);

            posivelposicao = "i"+posivelposicao+"j"+posivelposicaoy;

            let laranja = document.getElementById('posicao');
            laranja.innerHTML = posivelposicao;
            document.getElementById('pecaselecionada').innerHTML = "2";

            if(document.getElementById(posivelposicao).style.backgroundColor == "green"){
                document.getElementById(posivelposicao).style.backgroundColor = arroz;
            } else{
                document.getElementById(posivelposicao).style.backgroundColor = "green";
            }
        }
        if(e.target.style.backgroundColor == "blue")
        {
            let posivelposicao = document.querySelector('span').innerHTML;
            console.log(posivelposicao);
            let peao = document.createElement('img');
            peao.setAttribute("id", `peao`);
            peao.setAttribute("class", `peca`);
            peao.setAttribute("src", `./assets/dama.png`);
            document.getElementById(posivelposicao).appendChild(peao);
            voltarcor(e.target);
        }
        if(e.target.style.backgroundColor == "green")
        {
            let posivelposicao = document.querySelector('span').innerHTML;
            console.log("nova posição: " + posivelposicao);
            let peao = document.createElement('img');
            peao.setAttribute("id", `peaobranco`);
            peao.setAttribute("class", `peca pecabranca`);
            peao.setAttribute("src", `./assets/dama.png`);
            document.getElementById(posivelposicao).appendChild(peao);
            voltarcor(e.target);
        }
    }
}

tabuleiroDom.addEventListener('click', escolherPeca, false);