# Banca de figurinhas

Álbum de figurinhas para muitos é só de 4 em 4 anos. Depois da Copa, o que se faz com aquele monte de repetidas, se não há mais postos de troca? Como conseguir aquela última figurinha?

Então, o Banca de Figurinhas é lugar onde essa mágica pode acontecer! 

## Objetivo

Funcionar como um banco de figurinhas acessível, onde seja possível encontrar a figurinha desejada e fazer contato com o usuário vinculado a ela. 
Inicialmente, o projeto englobará apenas figurinhas das Copas do Mundo, mas é livre para colaboração e expandir para outros álbuns! ⚽

Este é um projeto realizado em acompanhamento ao Módulo 2 de Desenvolvimento de Software Back-end da Cubos Academy.

## Requisitos

- [Node.js](https://nodejs.org/en/)
- Express.js
- [Insomnia](https://insomnia.rest/)

## Instalação

- Clone este repositório para o seu repositório local.
- Comando para iniciar o servidor: `npm run dev`

## Instruções

- Inicie o seu Insomnia.
- Listagem de figurinhas disponíveis. Esta rota possui senha: `GET - http://localhost:3000/figurinhas?senha=figurinhas123`
- Visualização de uma figurinha específica: `GET - http://localhost:3000/figurinhas/encontrar/:id`
- Cadastro de nova figurinha: `POST - http://localhost:3000/figurinhas/cadastrar`<br>
  1: O cadastro de uma nova figurinha deve ser feito no formato JSON e fornecer as seguintes informações obrigatórias:
```javascript
// POST /figurinhas
{
    "nomeFig": "Rio Ferdinand",
    "paisFig": "ENG",
    "albumFig": "2010",
    "cromoFig": "186",
    "telefone": "21999102020",
}
```

### Observações

- Esta é a versão Beta 0.1, com as funcionalidades mais básicas previstas em funcionamento.
- A base de dados atual está pronta para verificar figurinhas cadastradas para os álbuns 1994, 2018 e 2022.
