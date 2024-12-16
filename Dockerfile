# Etapa 1: Construcción de la aplicación
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos de construcción generados a la carpeta de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto que Render asignará (en lugar de 80)
EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]
