import json

with open("merged_files.json", "r") as myFile:
    fileJson = myFile.read()

rawData = json.loads(fileJson)

totalLang = {}
for i in rawData:
    for j in i:
        for key, val in i[j].items():
            if key == 'message' or key == 'block':
                continue
            if key in totalLang.keys():
                totalLang[key] += val
            else:
                totalLang[key] = val

top10Lang = {}
sortedKeys = sorted(totalLang, key=totalLang.get, reverse=True)
sortedKeys = sortedKeys[:10]

for item in sortedKeys:
    top10Lang[item] = totalLang[item]

top10LangJSON = json.dumps(top10Lang)
with open("top10lang.json", 'w', encoding="utf-8") as myFile:
    myFile.write(top10LangJSON)
