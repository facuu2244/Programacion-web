import requests

response=requests.get("https://dolarapi.com/v1/dolares/blue")
respuesta_json=response.json()

print("---------Dolar Blue---------")
print(f"Precio de compra: ${respuesta_json["compra"]}, Pecio de venta: ${respuesta_json["venta"]}, Fecha de actualzacion: {respuesta_json["fechaActualizacion"]}")

print("\n---------datos de la solicitud---------")
print("URL:", response.request.url)
print("Metodo:", response.request.method)
print("Headers de la solicitud:", response.request.headers)

print("\n---------datos de la respuesta---------")
print("Código de estado:", response.status_code)
print("Cuerpo de la respuesta:", response.text)
print("Headers de la respuesta:", response.headers)