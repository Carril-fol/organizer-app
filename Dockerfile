FROM node:18 AS builder

WORKDIR /frontend

COPY package.json ./

RUN npm install

COPY . .

RUN npm install --force

EXPOSE 4173

RUN npm run build

CMD ["npm", "run", "preview"]
