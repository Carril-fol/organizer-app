FROM node:18 AS builder

WORKDIR /frontend

COPY package.json ./

RUN npm install

COPY . .

RUN npm install --force

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
