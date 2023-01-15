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
                torre.setAttribute("id",`torre`);
                torre.setAttribute("class", `peca`);
                torre.setAttribute("src", `./assets/torre.png`);
                quadrado.appendChild(torre);
            }
            if(i == 7 && j == 0 || i == 7 && j == 7){
                let torre = document.createElement('img');
                torre.setAttribute("id",`torrebranca`);
                torre.setAttribute("class", `peca pecabranca`);
                torre.setAttribute("src", `./assets/torre.png`);
                quadrado.appendChild(torre);
            }
            //gerarCavalor
            if(i == 0 && j == 1 || i == 0 && j == 6){
                let cavalo = document.createElement('img');
                cavalo.setAttribute("id",`cavalo`);
                cavalo.setAttribute("class", `peca`);
                cavalo.setAttribute("src", `./assets/cavalo.png`);
                quadrado.appendChild(cavalo);
            }
            if(i == 7 && j == 1 || i == 7 && j == 6){
                let cavalo = document.createElement('img');
                cavalo.setAttribute("id",`cavalobranco`);
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

const apagapeca = () =>{
    let nomepecaremovida = document.getElementById("posicaopecaselecionada").textContent;
    let pecaremovida = document.getElementById(nomepecaremovida);
    console.log("peça removida: " + nomepecaremovida);
    pecaremovida.removeChild(pecaremovida.firstChild);
    //document.getElementById(posivelposicao).removeChild(document.get);
}

const voltarcor = () =>{
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let textoquadrado = "i"+i+"j"+j;
            let quadrado = document.getElementById(textoquadrado);

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
        }
    }
}

const escolherPeca = (e) => {
    if(e.target != tabuleiroDom)
    {
        if(e.target.id == "peao")
        {
            voltarcor();
            document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

            let posivelposicao = e.target.parentNode.id.split("");
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1]; 
            posivelposicao = parseInt(posivelposicaox);
            posivelposicao ++;
            
            let posivelposicaoleft = (posivelposicaoy - 1);
            let posivelposicaoright = parseInt(posivelposicaoy) + 1;

            if (posivelposicaoleft >= 0)
            {
                var posicaocampoX1 = "i"+posivelposicao+"j"+posivelposicaoleft;

                if (document.getElementById(posicaocampoX1).hasChildNodes()){
                    document.getElementById(posicaocampoX1).style.backgroundColor = "blue";
                }
            }

            if (posivelposicaoright <= 7)
            {
                var posicaocampoX2 = "i"+posivelposicao+"j"+posivelposicaoright;

                if (document.getElementById(posicaocampoX2).hasChildNodes()){
                    document.getElementById(posicaocampoX2).style.backgroundColor = "blue";
                }
            }

            posivelposicao = "i"+posivelposicao+"j"+posivelposicaoy;

            let laranja = document.getElementById('posicao');
            laranja.innerHTML = posivelposicao;
            document.getElementById("pecaselecionada").innerHTML = "1"
            
            if(document.getElementById(posivelposicao).hasChildNodes() == false){
                if(document.getElementById(posivelposicao).style.backgroundColor == "blue"){
                    voltarcor();
                } else{
                    document.getElementById(posivelposicao).style.backgroundColor = "blue";
                }
            }

            console.log("posivelposicaoleft " + posivelposicaoleft)
            console.log("posivelposicaoright " + posivelposicaoright)
        }
        if(e.target.id == "peaobranco")
        {
            voltarcor();
            document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

            let posivelposicao = e.target.parentNode.id.split("");
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            posivelposicao = parseInt(posivelposicaox);
            posivelposicao += -1;

            let posivelposicaoleft = (posivelposicaoy - 1);
            let posivelposicaoright = parseInt(posivelposicaoy) + 1;

            if (posivelposicaoleft >= 0)
            {
                var posicaocampoX1 = "i"+posivelposicao+"j"+posivelposicaoleft;

                if (document.getElementById(posicaocampoX1).hasChildNodes()){
                    document.getElementById(posicaocampoX1).style.backgroundColor = "green";
                }
            }

            if (posivelposicaoright <= 7)
            {
                var posicaocampoX2 = "i"+posivelposicao+"j"+posivelposicaoright;

                if (document.getElementById(posicaocampoX2).hasChildNodes()){
                    document.getElementById(posicaocampoX2).style.backgroundColor = "green";
                }
            }

            posivelposicao = "i"+posivelposicao+"j"+posivelposicaoy;

            let laranja = document.getElementById('posicao');
            laranja.innerHTML = posivelposicao;
            document.getElementById("pecaselecionada").innerHTML = "2"

            if(document.getElementById(posivelposicao).hasChildNodes() == false){
                if(document.getElementById(posivelposicao).style.backgroundColor == "green"){
                    voltarcor();
                } else{
                    document.getElementById(posivelposicao).style.backgroundColor = "green";
                }
            }

            console.log("posivelposicaoleft " + posivelposicaoleft)
            console.log("posivelposicaoright " + posivelposicaoright)
        }
        if(e.target.id == "torre"){
            voltarcor();
            document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;
            let posivelposicao = e.target.parentNode.id.split("");
            console.log(posivelposicao);
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            document.getElementById("pecaselecionada").innerHTML = "3"
            let posivelposicaoya = Number(posivelposicaoy)
            posivelposicaoya++
            let posivelposicaoxa = Number(posivelposicaox)
            posivelposicaoxa++
            
            //movi pra direita
            for (i = posivelposicaoya; i <= 7; i++){
                let quadrado = "i" + posivelposicao[1] + "j" + i
                document.getElementById(quadrado).style.backgroundColor = "blue";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }
            
            //movi pra esquerda
            for (i = posivelposicaoy - 1; i >= 0; i--){
                let quadrado = "i" + posivelposicao[1] + "j" + i
                document.getElementById(quadrado).style.backgroundColor = "blue";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }

            //movi pra baixo
            for (i = posivelposicaoxa; i <= 7; i++){
                let quadrado = "i" + i + "j" + posivelposicao[3]
                document.getElementById(quadrado).style.backgroundColor = "blue";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }
            
            //movi pra cima
            for (i = posivelposicaox - 1; i >= 0; i--){
                let quadrado = "i" + i + "j" + posivelposicao[3]
                document.getElementById(quadrado).style.backgroundColor = "blue";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }
        }
        if(e.target.id == "torrebranca"){
            voltarcor();
            document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;
            let posivelposicao = e.target.parentNode.id.split("");
            console.log(posivelposicao);
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            document.getElementById("pecaselecionada").innerHTML = "4"
            let posivelposicaoya = Number(posivelposicaoy)
            posivelposicaoya++
            let posivelposicaoxa = Number(posivelposicaox)
            posivelposicaoxa++
            
            //movi pra direita
            for (i = posivelposicaoya; i <= 7; i++){
                let quadrado = "i" + posivelposicao[1] + "j" + i
                document.getElementById(quadrado).style.backgroundColor = "green";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }
            
            //movi pra esquerda
            for (i = posivelposicaoy - 1; i >= 0; i--){
                let quadrado = "i" + posivelposicao[1] + "j" + i
                document.getElementById(quadrado).style.backgroundColor = "green";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }

            //movi pra baixo
            for (i = posivelposicaoxa; i <= 7; i++){
                let quadrado = "i" + i + "j" + posivelposicao[3]
                document.getElementById(quadrado).style.backgroundColor = "green";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }
            
            //movi pra cima
            for (i = posivelposicaox - 1; i >= 0; i--){
                let quadrado = "i" + i + "j" + posivelposicao[3]
                document.getElementById(quadrado).style.backgroundColor = "green";
                if (document.getElementById(quadrado).hasChildNodes()){
                    break
                }
            }
        }
        if(e.target.id == "cavalo"){
            voltarcor();
            document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;
            let posivelposicao = e.target.parentNode.id.split("");
            console.log(posivelposicao);
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            document.getElementById("pecaselecionada").innerHTML = "5"
            let posivelposicaoya = Number(posivelposicaoy)
            let posivelposicaoxa = Number(posivelposicaox)


            //baixo
            if(posivelposicaox < 6 && posivelposicaoy > 0){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 1
                posivelposicaoxa = posivelposicaoxa + 2
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "blue";
            }
            if(posivelposicaox < 6 && posivelposicaoy < 7){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 1
                posivelposicaoxa = posivelposicaoxa + 2
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "blue";
            }
            //cima
            if(posivelposicaox > 1 && posivelposicaoy > 0){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 1
                posivelposicaoxa = posivelposicaoxa - 2
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "blue";
            }
            if(posivelposicaox > 1 && posivelposicaoy < 7){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 1
                posivelposicaoxa = posivelposicaoxa - 2
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "blue";
            }
            //direita
            if(posivelposicaox < 7 && posivelposicaoy < 6){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 2
                posivelposicaoxa = posivelposicaoxa - 1
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "blue";
            }
            if(posivelposicaox < 7 && posivelposicaoy < 6){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 2
                posivelposicaoxa = posivelposicaoxa + 1
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "blue";
            }
            //esquerda
            if(posivelposicaox > 1 && posivelposicaoy > 1){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 2
                posivelposicaoxa = posivelposicaoxa - 1
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "blue";
            }
            if(posivelposicaox < 7 && posivelposicaoy > 1){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 2
                posivelposicaoxa = posivelposicaoxa + 1
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "blue";
            }
        }
        if(e.target.id == "cavalobranco"){
            voltarcor();
            document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;
            let posivelposicao = e.target.parentNode.id.split("");
            console.log(posivelposicao);
            let posivelposicaoy = posivelposicao[3];
            let posivelposicaox = posivelposicao[1];
            document.getElementById("pecaselecionada").innerHTML = "6"
            let posivelposicaoya = Number(posivelposicaoy)
            let posivelposicaoxa = Number(posivelposicaox)


            //baixo
            if(posivelposicaox < 6 && posivelposicaoy > 0){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 1
                posivelposicaoxa = posivelposicaoxa + 2
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "green";
            }
            if(posivelposicaox < 6 && posivelposicaoy < 7){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 1
                posivelposicaoxa = posivelposicaoxa + 2
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "green";
            }
            //cima
            if(posivelposicaox > 1 && posivelposicaoy > 0){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 1
                posivelposicaoxa = posivelposicaoxa - 2
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "green";
            }
            if(posivelposicaox > 1 && posivelposicaoy < 7){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 1
                posivelposicaoxa = posivelposicaoxa - 2
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "green";
            }
            //direita
            if(posivelposicaox < 7 && posivelposicaoy < 6){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 2
                posivelposicaoxa = posivelposicaoxa - 1
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "green";
            }
            if(posivelposicaox < 7 && posivelposicaoy < 6){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya + 2
                posivelposicaoxa = posivelposicaoxa + 1
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "green";
            }
            //esquerda
            if(posivelposicaox > 1 && posivelposicaoy > 1){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 2
                posivelposicaoxa = posivelposicaoxa - 1
                let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo1).style.backgroundColor = "green";
            }
            if(posivelposicaox < 7 && posivelposicaoy > 1){
                posivelposicaoya = Number(posivelposicaoy)
                posivelposicaoxa = Number(posivelposicaox)
                posivelposicaoya = posivelposicaoya - 2
                posivelposicaoxa = posivelposicaoxa + 1
                let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                document.getElementById(baixo2).style.backgroundColor = "green";
            }
        }

        //Eliminação
        if(e.target.style.backgroundColor == "blue")
        {
            //verifica se o div nao esta vazio
            if (e.target.hasChildNodes()){
                e.target.removeChild(e.target.firstChild);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "1"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let peao = document.createElement('img');
                peao.setAttribute("id", `peao`);
                peao.setAttribute("class", `peca`);
                peao.setAttribute("src", `./assets/dama.png`);
                document.getElementById(posivelposicao).appendChild(peao);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "3"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let torre = document.createElement('img');
                torre.setAttribute("id", `torre`);
                torre.setAttribute("class", `peca`);
                torre.setAttribute("src", `./assets/torre.png`);
                document.getElementById(posivelposicao).appendChild(torre);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "5"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let cavalo = document.createElement('img');
                cavalo.setAttribute("id", `cavalo`);
                cavalo.setAttribute("class", `peca`);
                cavalo.setAttribute("src", `./assets/cavalo.png`);
                document.getElementById(posivelposicao).appendChild(cavalo);
            }
            voltarcor();
            apagapeca();
        }
        if(e.target.style.backgroundColor == "green")
        {
            //elimina a peça inimiga
            if (e.target.hasChildNodes()){
                e.target.removeChild(e.target.firstChild);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "2"){
                let posivelposicao = e.target.id;
                console.log("nova posição: " + posivelposicao);
                let peao = document.createElement('img');
                peao.setAttribute("id", `peaobranco`);
                peao.setAttribute("class", `peca pecabranca`);
                peao.setAttribute("src", `./assets/dama.png`);
                document.getElementById(posivelposicao).appendChild(peao);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "4"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let torre = document.createElement('img');
                torre.setAttribute("id", `torrebranca`);
                torre.setAttribute("class", `peca pecabranca`);
                torre.setAttribute("src", `./assets/torre.png`);
                document.getElementById(posivelposicao).appendChild(torre);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "6"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let cavalo = document.createElement('img');
                cavalo.setAttribute("id", `cavalobranco`);
                cavalo.setAttribute("class", `peca pecabranca`);
                cavalo.setAttribute("src", `./assets/cavalo.png`);
                document.getElementById(posivelposicao).appendChild(cavalo);
            }
            voltarcor();
            apagapeca();
        }
    }
}

tabuleiroDom.addEventListener('click', escolherPeca, false);