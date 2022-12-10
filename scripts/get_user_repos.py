import json
import requests

with open("total contributors.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)
totalRepos = []
headers = {'Authorization': 'token ' +
           'xxx'}
for item in rawData:
    respRepositories = requests.get(item['url'] + '/repos', headers=headers)
    totalRepos += [respRepositories.json()]

totalReposJSON = json.dumps(totalRepos)

with open("users_data_repos.json", "w") as my_file:
    my_file.write(totalReposJSON)
