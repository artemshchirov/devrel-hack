import json
import requests

with open("total contributors.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)
total = []
headers = {'Authorization': 'token ' +
           'xxx'}
for item in rawData:
    response = requests.get(item['url'], headers=headers)
    total += [response.json()]

totalJSON = json.dumps(total)

with open("users_data.json", "w") as my_file:
    my_file.write(totalJSON)
