# Usa una imagen base con Node.js instalado
FROM node:18.17.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias de producción y de desarrollo
RUN yarn install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Comando por defecto
CMD ["sh", "-c", "yarn chain & sleep 15 && yarn deploy && yarn start"]
