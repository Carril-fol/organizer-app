FROM python:3.10-alpine

# Instala dependencias necesarias del sistema
RUN apk add --no-cache gcc musl-dev libffi-dev openssl-dev python3-dev

# Actualiza pip
RUN pip3 install --upgrade pip

# Establece el directorio de trabajo
WORKDIR /backend

# Copia el archivo requirements.txt y las dependencias primero
COPY requirements.txt /backend/

# Instala las dependencias del proyecto
RUN pip3 install --no-cache-dir -r requirements.txt

# Copia el resto del proyecto
COPY . /backend

# Expone el puerto de la aplicación
EXPOSE 8000

# Comando por defecto para iniciar la aplicación
CMD ["python", "src/app.py"]
