/*
*  = =========================================================================================================
*  = ==       E   S   T   U   D   O   S           D   E           J   A   V   S   C   R   I   P   T       ====
*  = =========================================================================================================
*
*   Código Javascript para executar os calculos, utilizando uma função.
*
*   => Em programação as funções são utilizadas para executar uma sequencia de
*   comandos, nesse caso, a nossa chamada "executarCalculo()", executa os calculos.
*
*
*   => let e const são formas de armazenar conteúdo com um nome personalizado, 
*   por exemplo:
*
*   const nome = "Jéssica";
*   let idade  = 23;
*
*   Nesse exemplo acima, foi utilizado "const" para nome, pois seu nome será sempre Jéssica,
*   Então não vai sofrer mudanças. Foi utilizado "let" para idade, pois sua idade poderá mudar com o tempo.
*
*   ===
*   ==  function executarCalculo()
*   ===
*
*   let valor_1: Essa variavel foi criada para pegar o valor do primeiro "input" no HTML, com o id = "valor1";
*   let valor_2: Mesma ideia da valor_1, porém para o "input" no HMTL, com o id = "valor2";
*
*   Dentro dessas variaveis existe:
*       -   parseFloat: transforma o número que vem em formato de texto/string em um Float (que é um número flutuante, ex: 10.0);
*       -   document: faz referência ao "Document" que está sendo executado o script, nesse caso o calculadora.html.
*       -   .getElementById("valor1"): pega o elemento <input id="valor1"> que tenha o id igual a "valor1" no Document acima (calculadora.html).
*       -   .value: pega o valor dentro do input acima, ou seja, se tiver <input id="valor1" value="444">, ele irá receber 444.
*
*   Então de forma resumida essa parte do código pega o valor do elemento com o id="valor1" e transforma em float (números flutuantes, ex: 11.2.
*
*   Esse códio em javascript, pode ser traduzido em português como:
*   let valor_1                 =   parseFloat( document.getElementById("valor1").value );
*   criar variavel valor_1      =   transformeEmFlutuante( calculadora -> pegueElementoComId=valor1 -> pegue o valor desse elemento );
*
*
*   Na parte de baixo do código é selecionado os inputs que possuem os respectivos id: "Soma", "Multipicacao", "Divisao", "Subtracao"...
*
*   A ideia de funcionamento é o mesmo do anterior, a diferença é que nesse caso a gente não pega o ".value" do elemento,
*   pois a gente não precisa PEGAR o valor do <input id="Soma">, a gente precisa ADICIONAR um valor no <input id="Soma">
*   
*   Nas linhas abaixo é possivel ver que temos "Soma.value = (valor_1) + (valor_2)", ou seja, estamos adicionando um valor
*   no elemento que selecionamos anteriormente com document.getElementById("Soma");
*
*
*/   


function executarCalculo() {

    // Pega o valor do elemento: <input type="number" id="valor1" name="valor1" /> e transfoma ele em número flutuante.
    let valor_1             = parseFloat(document.getElementById("valor1").value); 

    // Pega o valor do elemento: <input type="number" id="valor1" name="valor2" /> e transfoma ele em número flutuante.
    let valor_2             = parseFloat(document.getElementById("valor2").value);

    // Pega apenas o elemento: <input type="number" id="Soma" name="resultado" placeholder="Resultado Soma" readonly />
    let Soma                = document.getElementById("Soma");
    let Multiplicacao       = document.getElementById("Multiplicacao"); // Faz a mesma coisa que o soma, mas para o elemento com id=Multiplicacao
    let Divisao             = document.getElementById("Divisao");       // Faz a mesma coisa que o soma, mas para o elemento com id=Divisao
    let Subtracao           = document.getElementById("Subtracao");     // Faz a mesma coisa que o soma, mas para o elemento com id=Subtracao
    let Porcentagem         = document.getElementById("Porcentagem");   // Faz a mesma coisa que o soma, mas para o elemento com id=Porcentagem

    // Agora nós estamos selecionando o "value" de Soma e fazendo igual a soma dos valores pegados acima.
    Soma.value              = ( (valor_1)       +   (valor_2) );        
    Multiplicacao.value     = ( (valor_1)       *   (valor_2) );
    Divisao.value           = ( (valor_1)       /   (valor_2) );
    Subtracao.value         = ( (valor_1)       -   (valor_2) );
    Porcentagem.value       = ( (valor_1)*100   /   (valor_2) );

}


/*

*   Código acima traduzido em português:

função executarCalculo() {


    variavel valor_1        = Valor de <input type="number" id="valor1" name="valor1" />;
    variavel valor_1        = Valor de <input type="number" id="valor1" name="valor2" />;


    variavel Soma           = <input type="number" id="Soma" name="resultado" placeholder="Resultado Soma" readonly />
    variavel Multiplicacao  = <input type="number" id="Multiplicacao" name="resultado" placeholder="Resultado Soma" readonly />
    variavel Divisao        = <input type="number" id="Divisao" name="resultado" placeholder="Resultado Soma" readonly />
    variavel Subtracao      = <input type="number" id="Subtracao" name="resultado" placeholder="Resultado Soma" readonly />
    variavel Porcentagem    = <input type="number" id="Porcentagem" name="resultado" placeholder="Resultado Soma" readonly />


    Soma.value              = ( (valor_1)       +   (valor_2) );        
    Multiplicacao.value     = ( (valor_1)       *   (valor_2) );
    Divisao.value           = ( (valor_1)       /   (valor_2) );
    Subtracao.value         = ( (valor_1)       -   (valor_2) );
    Porcentagem.value       = ( (valor_1)*100   /   (valor_2) );

}

*/ 