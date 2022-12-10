import json
import requests

with open("get_contributors.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)
total = []
headers = {'Authorization': 'token ' +
           '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'}
for item in rawData:
    response = requests.get(item['url'], headers=headers)
    total += [response.json()]

totalJSON = json.dumps(total)

with open("get_user_info.json", "w") as my_file:
    my_file.write(totalJSON)
