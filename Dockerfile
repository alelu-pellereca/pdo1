FROM node:10.13-alpine
WORKDIR /opt

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "start","node","server.js"]

