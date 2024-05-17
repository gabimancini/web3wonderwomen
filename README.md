### Español:
# DeFiWise✨

## Descripción

DeFiWise es una plataforma de aprendizaje en línea que utiliza tecnología blockchain para enseñar y mejorar la educación financiera. Se enfoca en la gamificación y contenido atractivo para atraer a diferentes audiencias.

## Características Clave

- **Cursos Gamificados**: Cursos interactivos y juegos sobre temas financieros básicos.
- **Tokenización**: Recompensas en tokens por completar cursos y alcanzar hitos.
- **NFTs como Certificados**: Certificados de finalización en forma de NFTs únicos.
- **Inversión Simulada**: Simulaciones de inversión en un entorno seguro.
- **Comunidad**: Foros y grupos de discusión para un aprendizaje colaborativo.
- **DeFi Educación**: Módulos específicos sobre finanzas descentralizadas (DeFi).

## Contratos en el Proyecto

- **Sepolia Transaction Hash (Txhash) Details**: Este contrato es utilizado para registrar detalles de transacciones en la blockchain de prueba Sepolia. Es utilizado para generar certificados de finalización de cursos, los cuales pueden ser verificados en la [blockchain](https://sepolia.etherscan.io/tx/0x01ed297f62b872542c9c59ccd48da2650cb0639a57aaadfb1cbda31786e1ae09).

- **Contrato DNSRegistrar ENS**: Este contrato actúa como un intermediario entre los nombres de dominio de Internet y los nombres de Ethereum en el sistema ENS (Ethereum Name Service). Permite reclamar nombres de dominio en Ethereum, verificando la propiedad del nombre de dominio en Internet mediante pruebas especiales.

- **Unlock-protocol**: Estamos orgullosas de presentar nuestro MVP en la [Hackathon Latina Blockchain](https://womenbizweb3.notion.site/Latina-Blockchain-Hackathon-867d722240c34f8383fd4ec9e1beca61) y nos encantaría que nos acompañaras en este emocionante evento. Únete a nosotras por medio de [unlock-protocol](https://app.unlock-protocol.com/event/de-fi-wise) y descubre cómo estamos revolucionando la educación financiera.

# Instalación

### Configurar el ambiente de manera local

Antes de comenzar, necesitas instalar las siguientes herramientas:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) o [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

Luego, ejecuta los siguientes comandos:
```bash
- yarn install # instala dependencias
- yarn chain # genera las cadenas
- yarn deploy # realiza el deploy de los contratos localmente con esas cadenas
- yarn start # levanta el proyecto
```

### Configurar el ambiente utilizando Docker

```bash
- git clone https://github.com/tuusuario/DeFiWise.git
- cd DeFiWise
- docker-compose up
```

## Sobre Scaffold-ETH

Scaffold-ETH se utiliza para generar la estructura del proyecto, proporcionando un entorno de desarrollo robusto y herramientas para el desarrollo de contratos inteligentes de Ethereum y la interfaz de las persona usuaria. [repositorio de GitHub](https://github.com/scaffold-eth/scaffold-eth-2). 

## 🔑 Licencia

- [MIT](https://github.com/gabimancini/web3wonderwomen/blob/main/LICENCE).

---

### English:

# DeFiWise✨

## Description

DeFiWise is an online learning platform that utilizes blockchain technology to teach and enhance financial education. It focuses on gamification and engaging content to attract various audiences.

##  Key Features

- Gamified Courses: Interactive courses and games covering basic financial topics.
- Tokenization: Rewards in tokens for completing courses and achieving milestones.
- NFTs as Certificates: Completion certificates in the form of unique NFTs.
- Simulated Investing: Investment simulations in a secure environment.
- Community: Forums and discussion groups for collaborative learning.
- DeFi Education: Specific modules on decentralized finance (DeFi).

## Contracts in the Project

- **Sepolia Transaction Hash (Txhash) Details**: This contract is used to record transaction details on the Sepolia testnet blockchain. It is used to generate course completion certificates, which can be verified on the blockchain.

- **DNSRegistrar ENS Contract**: This contract acts as an intermediary between Internet domain names and Ethereum names in the Ethereum Name Service (ENS) system. It allows claiming domain names on Ethereum, verifying ownership of the domain name on the Internet through special tests.

- **Unlock-protocol**: We are proud to present our MVP at the [Latina Blockchain Hackathon](https://womenbizweb3.notion.site/Latina-Blockchain-Hackathon-867d722240c34f8383fd4ec9e1beca61) and would love for you to join us at this exciting event. Join us through [unlock-protocol](https://app.unlock-protocol.com/event/de-fi-wise) and discover how we are revolutionizing financial education.

## Installation

### Setting up the environment locally
- Before you start, you need to install the following tools:

- Node (>= v18.17)
- Yarn (v1 or v2+)
  
Then, run the following commands:

```bash 
- yarn install # install dependencies
- yarn chain # generate chains
- yarn deploy # deploy contracts locally with those chains
- yarn start # start the project
```

### Setting up the environment using Docker

```bash 
- git clone https://github.com/yourusername/DeFiWise.git
- cd DeFiWise
- docker-compose up
```

## About Scaffold-ETH

Scaffold-ETH is used to scaffold the project, providing a robust development environment and tooling for Ethereum smart contracts and frontend development.  For more information on Scaffold-ETH, visit the [GitHub repository](https://github.com/scaffold-eth/scaffold-eth-2). 

## 🔑 Licence

- [MIT](https://github.com/gabimancini/web3wonderwomen/blob/main/LICENCE).
