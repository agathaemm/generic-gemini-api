<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Generic Gemini Api</h3>

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This project makes a connection with the gemini api which through a prompt returns the desired content.

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

1. To use the Gemini API, you need an API key. [Get an API key](https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br&_gl=1*70sd7f*_up*MQ..&gclid=Cj0KCQjw1Yy5BhD-ARIsAI0RbXaXltujnnrCTEmS9CDtitBkbXe1-C8dSycDA7779ksKsKBbwAt9IKAaAkuMEALw_wcB)
2. Clone the repo
   ```sh
   git clone https://github.com/agathaemm/generic-gemini-api.git
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Create the .env file from the .env.example file and add the port you want to run the project on and the generated API key
   ```js
   PORT = 'ENTRER YOUR PORT';
   GEMINI_API_KEY = 'ENTER YOUR API';
   ```
5. Start project with
   ```sh
   npm run dev
   ```
