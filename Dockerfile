FROM nginx:latest
RUN apt update && apt upgrade -y
RUN apt install git -y
RUN apt autoclean -y
RUN git clone https://github.com/patrickm663/moehrke-co.git
WORKDIR /moehrke-co
COPY . /usr/share/nginx/html
