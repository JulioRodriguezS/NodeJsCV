FROM node:8.10
WORKDIR /home/julios/Documents/Proyects/CV-NodeJS
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]