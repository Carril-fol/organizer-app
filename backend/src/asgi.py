import asyncio
from hypercorn.config import Config
from hypercorn.asyncio import serve

def start_server(app, mode="wsgi"):
    config = Config()
    config.bind = ["0.0.0.0:8000"]
    config.use_reloader = False
    asyncio.run(serve(app, config))