import json

with open("merged_files.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)

top10LangByUser = {}
for i in rawData:
    for j in i:
        print(j)
        top10Lang = {}
        if 'message' in i[j].keys():
            i[j].pop('message')
        if 'block' in i[j].keys():
            i[j].pop('block')
        sortedKeys = sorted(i[j], key=i[j].get, reverse=True)
        if len(sortedKeys) > 10:
            sortedKeys = sortedKeys[:10]
        for item in sortedKeys:
            top10Lang[item] = i[j][item]
        top10LangByUser[j] = top10Lang

top10LangByUserJSON = json.dumps(top10LangByUser)
with open("top10lang_by_user.json", 'w', encoding="utf-8") as myFile:
    myFile.write(top10LangByUserJSON)
