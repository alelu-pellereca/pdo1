FROM node:16
WORKDIR /opt

COPY package.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start","node"]

