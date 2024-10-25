
FROM node:22.9.0-alpine
COPY package.json /opt/
WORKDIR /opt/ 
COPY ./ ./
RUN npm install

EXPOSE 3000
 
CMD ["npm", "run", "start"]