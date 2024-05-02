FROM node:16

WORKDIR /usr/src/app

RUN npm install strapi@3.6.8 -g --unsafe-perm

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
