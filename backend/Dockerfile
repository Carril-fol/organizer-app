FROM python:3.10-alpine

# Instala dependencias necesarias
RUN apk add --no-cache gcc musl-dev libffi-dev openssl-dev python3-dev

# Actualiza pip
RUN pip3 install --upgrade pip

# Establece el directorio de trabajo
WORKDIR /backend

# Copia todos los archivos al contenedor
COPY . /backend

# Instala las dependencias del archivo requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt

# Expone el puerto 8000
EXPOSE 8000

# Comando por defecto para ejecutar la aplicación
CMD ["python", "src/app.py"]
