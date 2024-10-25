FROM node:10.13-alpine
WORKDIR /opt

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start","node","server.js"]
