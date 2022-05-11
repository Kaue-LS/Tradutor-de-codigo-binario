## Tradutor de código binário
-Para iniciar digite no terminal **npm start**

-A Api feita esta na pasta **api**

-As funções de converter tanto texto e código estão na pasta **controllers**

-As rotas para a API estão no arquivo **app**

# Utilizados no desenvolvimento:
- [Express.js] ('https://www.npmjs.com/package/express')

- [Node.js] ('https://nodejs.org/en/')

- HTML, CSS e JavaScript

- [TailwindCSS] ('https://tailwindcss.com/')

# Como funciona?:

## Texto para código binário:
- Se for para transformar o texto em código, clique no botão 'Codificar'. 

- O processo é mais simples do que traduzir o codigo pra texto. Ele pegar todas as letras do campo e armazena em um Array, para ser encaminhado para o arquivo **Codify.js**. Em seguida ele vai procurar se a api criada, possui cada caractere que está sendo enviado para depois enviar o codigo binário dele em um Array junto com os outros.

-Ele respeita até o tanto de espaço que possui entre os textos e letras.

## Texto para código binário:

-Para traduzir o código, aperta o botão "Traduzir".

-Esse foi é um processo um pouco mais complexo, que ainda vai haver alterações no processo.

-Ele não respeitas os espaços digitados, cada codigio é armazenado em um Array com 8 quantidades de acordo com que está na API. Então **CUIDADO**, um código precisa no mínimo 8 digitos.

- O processo é similar com a trasnformação do texto para código, porém ele retorna as palavras com letras separadas uma das outras. 