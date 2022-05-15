FROM node:14
RUN apt update && apt upgrade -y
WORKDIR /app
COPY . /app
RUN npm install --legacy-peer-deps
RUN npm install -g gatsby-cli
RUN gatsby build
EXPOSE 80
CMD gatsby serve --port 80 --host 0.0.0.0
