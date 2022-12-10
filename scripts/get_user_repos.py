import json
import requests

with open("get_contributors.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)
totalRepos = []
headers = {'Authorization': 'token ' +
           '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'}
for item in rawData:
    respRepositories = requests.get(item['url'] + '/repos', headers=headers)
    totalRepos += [respRepositories.json()]

totalReposJSON = json.dumps(totalRepos)

with open("get_user_repos.json", "w") as my_file:
    my_file.write(totalReposJSON)
