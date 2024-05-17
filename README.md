# Español:
# DeFiWise

## Descripción

DeFiWise es una plataforma de aprendizaje en línea que utiliza tecnología blockchain para enseñar y mejorar la educación financiera. Se enfoca en la gamificación y contenido atractivo para atraer a diferentes audiencias.

## Características Clave

- **Cursos Gamificados**: Cursos interactivos y juegos sobre temas financieros básicos.
- **Tokenización**: Recompensas en tokens por completar cursos y alcanzar hitos.
- **NFTs como Certificados**: Certificados de finalización en forma de NFTs únicos.
- **Inversión Simulada**: Simulaciones de inversión en un entorno seguro.
- **Comunidad**: Foros y grupos de discusión para un aprendizaje colaborativo.
- **DeFi Educación**: Módulos específicos sobre finanzas descentralizadas (DeFi).


## Sobre Scaffold-ETH

Este proyecto utiliza Scaffold-ETH, un marco de desarrollo para construir rápidamente aplicaciones Ethereum. Scaffold-ETH proporciona una colección de herramientas y bibliotecas preconfiguradas para agilizar el proceso de desarrollo, incluyendo Hardhat, React y ethers.js. Para obtener más información sobre Scaffold-ETH, visita el [repositorio de GitHub](https://github.com/scaffold-eth/scaffold-eth-2).

## Uso de Scaffold-ETH

Scaffold-ETH se utiliza para generar la estructura del proyecto, proporcionando un entorno de desarrollo robusto y herramientas para el desarrollo de contratos inteligentes de Ethereum y la interfaz de usuario. 

## Contratos en el Proyecto

- **Sepolia Transaction Hash (Txhash) Details**: Este contrato es utilizado para registrar detalles de transacciones en la blockchain de prueba Sepolia. Es utilizado para generar certificados de finalización de cursos, los cuales pueden ser verificados en la [blockchain](https://sepolia.etherscan.io/tx/0x01ed297f62b872542c9c59ccd48da2650cb0639a57aaadfb1cbda31786e1ae09).

- **Contrato DNSRegistrar ENS**: Este contrato actúa como un intermediario entre los nombres de dominio de Internet y los nombres de Ethereum en el sistema ENS (Ethereum Name Service). Permite reclamar nombres de dominio en Ethereum, verificando la propiedad del nombre de dominio en Internet mediante pruebas especiales.

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

# Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

# English:

# DeFiWise

## Description

DeFiWise is an online learning platform that utilizes blockchain technology to teach and enhance financial education. It focuses on gamification and engaging content to attract various audiences.

## About Scaffold-ETH

This project utilizes Scaffold-ETH, a development framework for rapidly building Ethereum applications. Scaffold-ETH provides a collection of pre-configured tools and libraries to streamline the development process, including Hardhat, React, and ethers.js. For more information on Scaffold-ETH, visit the [GitHub repository]((https://github.com/scaffold-eth/scaffold-eth-2)).

## Utilizing Scaffold-ETH

Scaffold-ETH is used to scaffold the project, providing a robust development environment and tooling for Ethereum smart contracts and frontend development. 

##  Key Features

- Gamified Courses: Interactive courses and games covering basic financial topics.
- Tokenization: Rewards in tokens for completing courses and achieving milestones.
- NFTs as Certificates: Completion certificates in the form of unique NFTs.
- Simulated Investing: Investment simulations in a secure environment.
- Community: Forums and discussion groups for collaborative learning.
- DeFi Education: Specific modules on decentralized finance (DeFi).

## Contracts in the Project

- Sepolia Transaction Hash (Txhash) Details: This contract is used to record transaction details on the Sepolia testnet blockchain. It is used to generate course completion certificates, which can be verified on the blockchain.

- DNSRegistrar ENS Contract: This contract acts as an intermediary between Internet domain names and Ethereum names in the Ethereum Name Service (ENS) system. It allows claiming domain names on Ethereum, verifying ownership of the domain name on the Internet through special tests.

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

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
