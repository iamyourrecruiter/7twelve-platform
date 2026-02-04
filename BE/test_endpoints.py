from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

print('GET / ->', client.get('/').status_code, client.get('/').json())
print('GET /health ->', client.get('/health').status_code, client.get('/health').json())
resp = client.get('/api/market/cache')
print('GET /api/market/cache ->', resp.status_code)
try:
    print(resp.json())
except Exception as e:
    print('non-json response or error:', e)
