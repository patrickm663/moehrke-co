FROM nginx:latest
LABEL maintainer="patrickmoehrke46@gmail.com"
RUN apt update && apt upgrade -y && apt autoclean -y
COPY . /usr/share/nginx/html
