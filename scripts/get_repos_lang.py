import json
import requests

with open("users_data_repos.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)
languages = []
headers = {'Authorization': 'token ' +
           'xxx'}
for item in rawData:
    for i in range(len(item)):
        respLang = requests.get(item[i]['languages_url'], headers=headers)
        languages += [[item[i]] + [respLang.json()]]
        print(i)

languagesJSON = json.dumps(languages)

with open("users_repos_lang.json", "w") as my_file:
    my_file.write(languagesJSON)
