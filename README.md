<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Generic Gemini Api</h3>

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Este projeto faz uma conexão com o gemini api que através de um prompt ele retorna o conteúdo desejado.

### Built With

- [Node](https://nodejs.org/pt)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Gemini](https://ai.google.dev/gemini-api/docs/quickstart?hl=pt-br&_gl=1*1sg42mu*_up*MQ..&gclid=Cj0KCQjw1Yy5BhD-ARIsAI0RbXaXltujnnrCTEmS9CDtitBkbXe1-C8dSycDA7779ksKsKBbwAt9IKAaAkuMEALw_wcB&lang=node)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
- node

### Installation

1. Para usar a API Gemini, você precisa de uma chave de API. [Obter uma chave de API](https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br&_gl=1*70sd7f*_up*MQ..&gclid=Cj0KCQjw1Yy5BhD-ARIsAI0RbXaXltujnnrCTEmS9CDtitBkbXe1-C8dSycDA7779ksKsKBbwAt9IKAaAkuMEALw_wcB)
2. Clone o repo
   ```sh
   git clone https://github.com/agathaemm/generic-gemini-api.git
   ```
3. Instale as dependencias
   ```sh
   npm install
   ```
4. Crie o arquivo .env a partir do arquivo .env.example e adicione a porta que deseja rodar o projeto e a chave de api gerada
   ```js
   PORT = 'ENTRER YOUR PORT';
   GEMINI_API_KEY = 'ENTER YOUR API';
   ```
5. Para iniciar o projeto rode
   ```sh
   npm run dev
   ```
