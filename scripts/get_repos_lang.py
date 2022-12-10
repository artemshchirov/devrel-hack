import json
import requests

with open("get_user_repos.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)
languages = []
headers = {'Authorization': 'token ' +
           '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'}
for item in rawData:
    for i in range(len(item)):
        respLang = requests.get(item[i]['languages_url'], headers=headers)
        languages += [[item[i]] + [respLang.json()]]
        print(i)

languagesJSON = json.dumps(languages)

with open("get_repos_lang.json", "w") as my_file:
    my_file.write(languagesJSON)
