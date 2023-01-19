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
                    quadrado.style.backgroundColor = '#b0b59d';
                    quadrado.style.color = '#444';
                } else{
                    quadrado.style.backgroundColor = '#444';
                    quadrado.style.color = '#b0b59d';
                }
            } else{
                if(j % 2 == 0){
                    quadrado.style.backgroundColor = '#444';
                    quadrado.style.color = '#b0b59d';
                }
                else{
                    quadrado.style.backgroundColor = '#b0b59d';
                    quadrado.style.color = '#444';
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
                bispo.setAttribute("id",`bispo`);
                bispo.setAttribute("class", `peca`);
                bispo.setAttribute("src", `./assets/bispo.png`);
                quadrado.appendChild(bispo);
            }
            if(i == 7 && j == 2 || i == 7 && j == 5){
                let bispo = document.createElement('img');
                bispo.setAttribute("id",`bispobranco`);
                bispo.setAttribute("class", `peca pecabranca`);
                bispo.setAttribute("src", `./assets/bispo.png`);
                quadrado.appendChild(bispo);
            }
            //gerarRei
            if(i == 0 && j == 4){
                let rei = document.createElement('img');
                rei.setAttribute("id",`rei`);
                rei.setAttribute("class", `peca`);
                rei.setAttribute("src", `./assets/rei.png`);
                quadrado.appendChild(rei);
            }
            if(i == 7 && j == 3){
                let rei = document.createElement('img');
                rei.setAttribute("id",`reibranco`);
                rei.setAttribute("class", `peca pecabranca`);
                rei.setAttribute("src", `./assets/rei.png`);
                quadrado.appendChild(rei);
            }
            //gerarRainha
            if(i == 0 && j == 3){
                let rainha = document.createElement('img');
                rainha.setAttribute("id",`rainha`);
                rainha.setAttribute("class", `peca`);
                rainha.setAttribute("src", `./assets/rainha.png`);
                quadrado.appendChild(rainha);
            }
            if(i == 7 && j == 4){
                let rainha = document.createElement('img');
                rainha.setAttribute("id",`rainhabranco`);
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

const subirscore = () =>{
    var score = document.getElementById('vez').textContent;
    score = Number(score);
    score = score + 1;
    document.getElementById('vez').innerHTML = score;
}

const voltarcor = () =>{
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let textoquadrado = "i"+i+"j"+j;
            let quadrado = document.getElementById(textoquadrado);

            if(i % 2 == 0){
                if(j % 2 == 0){
                    quadrado.style.backgroundColor = '#b0b59d';
                    quadrado.style.color = '#444';
                } else{
                    quadrado.style.backgroundColor = '#444';
                    quadrado.style.color = '#b0b59d';
                }
            } else{
                if(j % 2 == 0){
                    quadrado.style.backgroundColor = '#444';
                    quadrado.style.color = '#b0b59d';
                }
                else{
                    quadrado.style.backgroundColor = '#b0b59d';
                    quadrado.style.color = '#444';
                }
            }
        }
    }
}

const verificatime1 = (quadrado) =>{
    if(quadrado.children[0].id == "peaobranco"){
        quadrado.style.backgroundColor = "blue";
    }
    if(quadrado.children[0].id == "torrebranca"){
        quadrado.style.backgroundColor = "blue";
    }
    if(quadrado.children[0].id == "cavalobranco"){
        quadrado.style.backgroundColor = "blue";
    }
    if(quadrado.children[0].id == "bispobranco"){
        quadrado.style.backgroundColor = "blue";
    }
    if(quadrado.children[0].id == "reibranco"){
        quadrado.style.backgroundColor = "blue";
    }
    if(quadrado.children[0].id == "rainhabranco"){
        quadrado.style.backgroundColor = "blue";
    }
    console.log(quadrado);
}

const verificatime2 = (quadrado) =>{
    if(quadrado.children[0].id == "peao"){
        quadrado.style.backgroundColor = "green";
    }
    if(quadrado.children[0].id == "torre"){
        quadrado.style.backgroundColor = "green";
    }
    if(quadrado.children[0].id == "cavalo"){
        quadrado.style.backgroundColor = "green";
    }
    if(quadrado.children[0].id == "bispo"){
        quadrado.style.backgroundColor = "green";
    }
    if(quadrado.children[0].id == "rei"){
        quadrado.style.backgroundColor = "green";
    }
    if(quadrado.children[0].id == "rainha"){
        quadrado.style.backgroundColor = "green";
    }
    console.log(quadrado);
}

const escolherPeca = (e) => {
    if(e.target != tabuleiroDom)
    {
        var score = document.getElementById('vez').textContent;
        score = Number(score);

        if(score % 2 == 0)
        {
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
                        verificatime2(document.getElementById(posicaocampoX1));
                    }
                }

                if (posivelposicaoright <= 7)
                {
                    var posicaocampoX2 = "i"+posivelposicao+"j"+posivelposicaoright;

                    if (document.getElementById(posicaocampoX2).hasChildNodes()){
                        verificatime2(document.getElementById(posicaocampoX2));
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
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }
                
                //movi pra esquerda
                for (i = posivelposicaoy - 1; i >= 0; i--){
                    let quadrado = "i" + posivelposicao[1] + "j" + i
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }

                //movi pra baixo
                for (i = posivelposicaoxa; i <= 7; i++){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }
                
                //movi pra cima
                for (i = posivelposicaox - 1; i >= 0; i--){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
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
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime2(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "green";
                    }
                }
                if(posivelposicaox < 6 && posivelposicaoy < 7){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 1
                    posivelposicaoxa = posivelposicaoxa + 2
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime2(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "green";
                    }
                }
                //cima
                if(posivelposicaox > 1 && posivelposicaoy > 0){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya - 1
                    posivelposicaoxa = posivelposicaoxa - 2
                    let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime2(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "green";
                    }
                }
                if(posivelposicaox > 1 && posivelposicaoy < 7){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 1
                    posivelposicaoxa = posivelposicaoxa - 2
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime2(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "green";
                    }
                }
                //direita
                if(posivelposicaox < 7 && posivelposicaoy < 6){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 2
                    posivelposicaoxa = posivelposicaoxa - 1
                    let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime2(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "green";
                    }
                }
                if(posivelposicaox < 7 && posivelposicaoy < 6){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 2
                    posivelposicaoxa = posivelposicaoxa + 1
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime2(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "green";
                    }
                }
                //esquerda
                if(posivelposicaox > 1 && posivelposicaoy > 1){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya - 2
                    posivelposicaoxa = posivelposicaoxa - 1
                    let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime2(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "green";
                    }
                }
                if(posivelposicaox < 7 && posivelposicaoy > 1){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya - 2
                    posivelposicaoxa = posivelposicaoxa + 1
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime2(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "green";
                    }
                }
            }
            if(e.target.id == "bispobranco"){
                voltarcor();
                document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

                let posivelposicao = e.target.parentNode.id.split("");
                let posivelposicaoy = posivelposicao[3];
                let posivelposicaox = posivelposicao[1]; 
                let posivelposicaoxa = Number(posivelposicaox);
                let posivelposicaoya = Number(posivelposicaoy);

                document.getElementById("pecaselecionada").innerHTML = "8";

                //baixo direita
                for(i=0; i<8;i++){
                    posivelposicaoxa++;
                    posivelposicaoya++;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
                //baixo esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa + 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
                //cima esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
                //cima direita
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya + 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
            }
            if(e.target.id == "reibranco"){
                voltarcor();
                document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

                let posivelposicao = e.target.parentNode.id.split("");
                let posivelposicaoy = posivelposicao[3];
                let posivelposicaox = posivelposicao[1]; 
                let posivelposicaoxa = Number(posivelposicaox);
                let posivelposicaoya = Number(posivelposicaoy);

                document.getElementById("pecaselecionada").innerHTML = "10";

                if(posivelposicaoxa < 7){
                    //baixo
                    posivelposicaoxa++;
                    let novaposicaobaixo = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaobaixo).hasChildNodes()){
                        verificatime2(document.getElementById(novaposicaobaixo));
                    } else{
                        document.getElementById(novaposicaobaixo).style.backgroundColor = "green";
                    }
                    //baixodireita
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya < 7){
                        posivelposicaoxa++;
                        posivelposicaoya++;
                        let novaposicaobaixodireita = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaobaixodireita).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicaobaixodireita));
                        } else{
                            document.getElementById(novaposicaobaixodireita).style.backgroundColor = "green";
                        }
                    }

                    //baixoesquerda
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya > 0){
                        posivelposicaoxa++;
                        posivelposicaoya--;
                        let novaposicaobaixoesquerda = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaobaixoesquerda).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicaobaixoesquerda));
                        } else{
                            document.getElementById(novaposicaobaixoesquerda).style.backgroundColor = "green";
                        }
                    }
                }
                //esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                if(posivelposicaoya > 0){
                    posivelposicaoya--;
                    let novaposicaoesquerda = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaoesquerda).hasChildNodes()){
                        verificatime2(document.getElementById(novaposicaoesquerda));
                    } else{
                        document.getElementById(novaposicaoesquerda).style.backgroundColor = "green";
                    }
                }
                //direita
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                if(posivelposicaoya < 7){
                    posivelposicaoya++;
                    let novaposicaodireita = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaodireita).hasChildNodes()){
                        verificatime2(document.getElementById(novaposicaodireita));
                    } else{
                        document.getElementById(novaposicaodireita).style.backgroundColor = "green";
                    }
                }
                if(posivelposicaoxa > 0){
                    //cimadireita
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya < 7){
                        posivelposicaoxa--;
                        posivelposicaoya++;
                        let novaposicaocimadireita = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaocimadireita).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicaocimadireita));
                        } else{
                            document.getElementById(novaposicaocimadireita).style.backgroundColor = "green";
                        }
                    }
                    //cimaesquerda
                        posivelposicaoxa = Number(posivelposicaox);
                        posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya > 0){
                        posivelposicaoxa--;
                        posivelposicaoya--;
                        let novaposicaocimaesquerda = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaocimaesquerda).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicaocimaesquerda));
                        } else{
                            document.getElementById(novaposicaocimaesquerda).style.backgroundColor = "green";
                        }
                    }
                    //cima
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    posivelposicaoxa--;
                    let novaposicaocima = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaocima).hasChildNodes()){
                        verificatime2(document.getElementById(novaposicaocima));
                    } else{
                        document.getElementById(novaposicaocima).style.backgroundColor = "green";
                    }
                }
            }
            if(e.target.id == "rainhabranco"){
                voltarcor();
                document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

                let posivelposicao = e.target.parentNode.id.split("");
                let posivelposicaoy = posivelposicao[3];
                let posivelposicaox = posivelposicao[1]; 
                let posivelposicaoxa = Number(posivelposicaox);
                let posivelposicaoya = Number(posivelposicaoy);
                posivelposicaoya++;
                posivelposicaoxa++;

                document.getElementById("pecaselecionada").innerHTML = "12";
                
                //movi pra direita
                for (i = posivelposicaoya; i <= 7; i++){
                    let quadrado = "i" + posivelposicao[1] + "j" + i
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }
                
                //movi pra esquerda
                for (i = posivelposicaoy - 1; i >= 0; i--){
                    let quadrado = "i" + posivelposicao[1] + "j" + i
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }

                //movi pra baixo
                for (i = posivelposicaoxa; i <= 7; i++){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }
                
                //movi pra cima
                for (i = posivelposicaox - 1; i >= 0; i--){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime2(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "green";
                }

                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                //baixo direita
                for(i=0; i<8;i++){
                    posivelposicaoxa++;
                    posivelposicaoya++;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
                //baixo esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa + 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
                //cima esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
                //cima direita
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya + 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime2(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "green";
                    }
                }
            }   
        } else{
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
                        verificatime1(document.getElementById(posicaocampoX1));
                    }
                }

                if (posivelposicaoright <= 7)
                {
                    var posicaocampoX2 = "i"+posivelposicao+"j"+posivelposicaoright;

                    if (document.getElementById(posicaocampoX2).hasChildNodes()){
                        verificatime1(document.getElementById(posicaocampoX2));
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
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }
                
                //movi pra esquerda
                for (i = posivelposicaoy - 1; i >= 0; i--){
                    let quadrado = "i" + posivelposicao[1] + "j" + i
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }

                //movi pra baixo
                for (i = posivelposicaoxa; i <= 7; i++){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }
                
                //movi pra cima
                for (i = posivelposicaox - 1; i >= 0; i--){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
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
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime1(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "blue";
                    }
                }
                if(posivelposicaox < 6 && posivelposicaoy < 7){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 1
                    posivelposicaoxa = posivelposicaoxa + 2
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime1(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "blue";
                    }
                }
                //cima
                if(posivelposicaox > 1 && posivelposicaoy > 0){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya - 1
                    posivelposicaoxa = posivelposicaoxa - 2
                    let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime1(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "blue";
                    }
                }
                if(posivelposicaox > 1 && posivelposicaoy < 7){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 1
                    posivelposicaoxa = posivelposicaoxa - 2
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime1(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "blue";
                    }
                }
                //direita
                if(posivelposicaox < 7 && posivelposicaoy < 6){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 2
                    posivelposicaoxa = posivelposicaoxa - 1
                    let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime1(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "blue";
                    }
                }
                if(posivelposicaox < 7 && posivelposicaoy < 6){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya + 2
                    posivelposicaoxa = posivelposicaoxa + 1
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime1(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "blue";
                    }
                }
                //esquerda
                if(posivelposicaox > 1 && posivelposicaoy > 1){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya - 2
                    posivelposicaoxa = posivelposicaoxa - 1
                    let baixo1 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo1).hasChildNodes()){
                        verificatime1(document.getElementById(baixo1));
                    } else{
                        document.getElementById(baixo1).style.backgroundColor = "blue";
                    }
                }
                if(posivelposicaox < 7 && posivelposicaoy > 1){
                    posivelposicaoya = Number(posivelposicaoy)
                    posivelposicaoxa = Number(posivelposicaox)
                    posivelposicaoya = posivelposicaoya - 2
                    posivelposicaoxa = posivelposicaoxa + 1
                    let baixo2 = "i" + posivelposicaoxa + "j" + posivelposicaoya
                    if (document.getElementById(baixo2).hasChildNodes()){
                        verificatime1(document.getElementById(baixo2));
                    } else{
                        document.getElementById(baixo2).style.backgroundColor = "blue";
                    }
                }
            }
            if(e.target.id == "bispo"){
                voltarcor();
                document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

                let posivelposicao = e.target.parentNode.id.split("");
                let posivelposicaoy = posivelposicao[3];
                let posivelposicaox = posivelposicao[1]; 
                let posivelposicaoxa = Number(posivelposicaox);
                let posivelposicaoya = Number(posivelposicaoy);

                document.getElementById("pecaselecionada").innerHTML = "7";

                //baixo direita
                for(i=0; i<8;i++){
                    posivelposicaoxa++;
                    posivelposicaoya++;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
                //baixo esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa + 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
                //cima esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
                //cima direita
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya + 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
            }
            if(e.target.id == "rei"){
                voltarcor();
                document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

                let posivelposicao = e.target.parentNode.id.split("");
                let posivelposicaoy = posivelposicao[3];
                let posivelposicaox = posivelposicao[1]; 
                let posivelposicaoxa = Number(posivelposicaox);
                let posivelposicaoya = Number(posivelposicaoy);

                document.getElementById("pecaselecionada").innerHTML = "9";

                if(posivelposicaoxa < 7){
                    //baixo
                    posivelposicaoxa++;
                    let novaposicaobaixo = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaobaixo).hasChildNodes()){
                        verificatime1(document.getElementById(novaposicaobaixo));
                    } else{
                        document.getElementById(novaposicaobaixo).style.backgroundColor = "blue";
                    }
                    //baixodireita
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya < 7){
                        posivelposicaoxa++;
                        posivelposicaoya++;
                        let novaposicaobaixodireita = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaobaixodireita).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicaobaixodireita));
                        } else{
                            document.getElementById(novaposicaobaixodireita).style.backgroundColor = "blue";
                        }
                    }

                    //baixoesquerda
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya > 0){
                        posivelposicaoxa++;
                        posivelposicaoya--;
                        let novaposicaobaixoesquerda = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaobaixoesquerda).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicaobaixoesquerda));
                        } else{
                            document.getElementById(novaposicaobaixoesquerda).style.backgroundColor = "blue";
                        }
                    }
                }
                //esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                if(posivelposicaoya > 0){
                    posivelposicaoya--;
                    let novaposicaoesquerda = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaoesquerda).hasChildNodes()){
                        verificatime1(document.getElementById(novaposicaoesquerda));
                    } else{
                        document.getElementById(novaposicaoesquerda).style.backgroundColor = "blue";
                    }
                }
                //direita
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                if(posivelposicaoya < 7){
                    posivelposicaoya++;
                    let novaposicaodireita = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaodireita).hasChildNodes()){
                        verificatime1(document.getElementById(novaposicaodireita));
                    } else{
                        document.getElementById(novaposicaodireita).style.backgroundColor = "blue";
                    }
                }
                if(posivelposicaoxa > 0){
                    //cimadireita
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya < 7){
                        posivelposicaoxa--;
                        posivelposicaoya++;
                        let novaposicaocimadireita = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaocimadireita).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicaocimadireita));
                        } else{
                            document.getElementById(novaposicaocimadireita).style.backgroundColor = "blue";
                        }
                    }
                    //cimaesquerda
                        posivelposicaoxa = Number(posivelposicaox);
                        posivelposicaoya = Number(posivelposicaoy);
                    if(posivelposicaoya > 0){
                        posivelposicaoxa--;
                        posivelposicaoya--;
                        let novaposicaocimaesquerda = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                        if(document.getElementById(novaposicaocimaesquerda).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicaocimaesquerda));
                        } else{
                            document.getElementById(novaposicaocimaesquerda).style.backgroundColor = "blue";
                        }
                    }
                    //cima
                    posivelposicaoxa = Number(posivelposicaox);
                    posivelposicaoya = Number(posivelposicaoy);
                    posivelposicaoxa--;
                    let novaposicaocima = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(document.getElementById(novaposicaocima).hasChildNodes()){
                        verificatime1(document.getElementById(novaposicaocima));
                    } else{
                        document.getElementById(novaposicaocima).style.backgroundColor = "blue";
                    }
                }
            }
            if(e.target.id == "rainha"){
                voltarcor();
                document.getElementById("posicaopecaselecionada").innerHTML = e.target.parentNode.id;

                let posivelposicao = e.target.parentNode.id.split("");
                let posivelposicaoy = posivelposicao[3];
                let posivelposicaox = posivelposicao[1]; 
                let posivelposicaoxa = Number(posivelposicaox);
                let posivelposicaoya = Number(posivelposicaoy);
                posivelposicaoya++;
                posivelposicaoxa++;

                document.getElementById("pecaselecionada").innerHTML = "11";
                
                //movi pra direita
                for (i = posivelposicaoya; i <= 7; i++){
                    let quadrado = "i" + posivelposicao[1] + "j" + i
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }
                
                //movi pra esquerda
                for (i = posivelposicaoy - 1; i >= 0; i--){
                    let quadrado = "i" + posivelposicao[1] + "j" + i
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }

                //movi pra baixo
                for (i = posivelposicaoxa; i <= 7; i++){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }
                
                //movi pra cima
                for (i = posivelposicaox - 1; i >= 0; i--){
                    let quadrado = "i" + i + "j" + posivelposicao[3]
                    if (document.getElementById(quadrado).hasChildNodes()){
                        verificatime1(document.getElementById(quadrado));
                        break
                    }
                    document.getElementById(quadrado).style.backgroundColor = "blue";
                }

                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                //baixo direita
                for(i=0; i<8;i++){
                    posivelposicaoxa++;
                    posivelposicaoya++;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
                //baixo esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa + 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa < 8 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
                //cima esquerda
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya - 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya >= 0){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
                //cima direita
                posivelposicaoxa = Number(posivelposicaox);
                posivelposicaoya = Number(posivelposicaoy);
                for(i=0; i<8;i++){
                    posivelposicaoxa = posivelposicaoxa - 1;
                    posivelposicaoya = posivelposicaoya + 1;
                    let novaposicao = "i" + posivelposicaoxa + "j" + posivelposicaoya;
                    if(posivelposicaoxa >= 0 && posivelposicaoya < 8){
                        if (document.getElementById(novaposicao).hasChildNodes()){
                            verificatime1(document.getElementById(novaposicao));
                            break
                        }
                        document.getElementById(novaposicao).style.backgroundColor = "blue";
                    }
                }
            }
        }

        //Eliminação
        if(e.target.style.backgroundColor == "blue")
        {
            //verifica se o div nao esta vazio
            subirscore();

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
            if(document.getElementById("pecaselecionada").innerHTML == "7"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let bispo = document.createElement('img');
                bispo.setAttribute("id", `bispo`);
                bispo.setAttribute("class", `peca`);
                bispo.setAttribute("src", `./assets/bispo.png`);
                document.getElementById(posivelposicao).appendChild(bispo);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "9"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let rei = document.createElement('img');
                rei.setAttribute("id", `rei`);
                rei.setAttribute("class", `peca`);
                rei.setAttribute("src", `./assets/rei.png`);
                document.getElementById(posivelposicao).appendChild(rei);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "11"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let rainha = document.createElement('img');
                rainha.setAttribute("id", `rainha`);
                rainha.setAttribute("class", `peca`);
                rainha.setAttribute("src", `./assets/rainha.png`);
                document.getElementById(posivelposicao).appendChild(rainha);
            }
            voltarcor();
            apagapeca();
        }
        if(e.target.style.backgroundColor == "green")
        {
            //elimina a peça inimiga
            subirscore();

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
            if(document.getElementById("pecaselecionada").innerHTML == "8"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let bispo = document.createElement('img');
                bispo.setAttribute("id", `bispobranco`);
                bispo.setAttribute("class", `peca pecabranca`);
                bispo.setAttribute("src", `./assets/bispo.png`);
                document.getElementById(posivelposicao).appendChild(bispo);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "10"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let rei = document.createElement('img');
                rei.setAttribute("id", `reibranco`);
                rei.setAttribute("class", `peca pecabranca`);
                rei.setAttribute("src", `./assets/rei.png`);
                document.getElementById(posivelposicao).appendChild(rei);
            }
            if(document.getElementById("pecaselecionada").innerHTML == "12"){
                let posivelposicao = e.target.id;
                console.log("movida para: " + posivelposicao);
                let rainha = document.createElement('img');
                rainha.setAttribute("id", `rainhabranco`);
                rainha.setAttribute("class", `peca pecabranca`);
                rainha.setAttribute("src", `./assets/rainha.png`);
                document.getElementById(posivelposicao).appendChild(rainha);
            }
            voltarcor();
            apagapeca();
        }
    }
}

tabuleiroDom.addEventListener('click', escolherPeca, false);