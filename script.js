function fillist() {
    var ul = document.querySelector('.lista ul');
    // console.log(ul)

    var frases = [
        'Feliz aniversario',
        'Feliz natal com muita paz',
        'Um Feliz Natal para toda a familia',
        'Fique em paz!',
        'Nos vemos em Breve',
        'feliz',
        'natal',
    ]
    for (let i = 0; i < frases.length; i++) {
        //variavel que possui o valor da string do array frases
        var liContent = frases[i];

        //cria o elemento li
        var li = document.createElement('li');

        // guarda a string em casa li criada
        li.textContent = liContent;
        //adicionar o li dentro do ul, empilhando a cada laço
        ul.appendChild(li);

    }

}
//o arquivo contato html remover todas as option que tem estados deixando apenas o selecione e criar uma função para prencher teg selecion com os estados.

//chama a função quando o arqquivo html for sempre carregado
fillist();