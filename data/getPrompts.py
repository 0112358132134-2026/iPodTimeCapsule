import json

# Abre el archivo JSON
with open('dataSet.json', encoding="utf8") as archivo_json:
    # Carga el contenido JSON en un diccionario
    datos = json.load(archivo_json)

# Accede al arreglo "data" dentro del diccionario
data = datos.get("data", [])

responses = []
counter = 0

# Itera sobre los objetos en el arreglo "data" e imprime sus valores de "title"
for objeto in data:
    if objeto['title'] == 'IPod':
        for x in objeto['paragraphs']:
            for y in x['qas']:
                registro = {
                    'prompt': y['question'],
                    'completion': y['answers'][0]['text'] + ' END'
                }
                responses.append(registro)
                counter += 1
                #print("Pregunta: {}".format(y['question']))
                #print("Respuesta: {}".format(y['answers'][0]['text']))

with open('dataPrompts_IPod.json', 'w') as archivo_json:    
    json.dump(responses, archivo_json)

print(counter)