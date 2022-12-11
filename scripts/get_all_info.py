import json
import requests
from tqdm import tqdm
import time

URL = 'https://api.github.com/repos/spring-projects/spring-boot/contributors?per_page=100&page=1'


def get_contributors(url):
    response = requests.get(url)
    total = []
    while 'next' in response.links:
        total += response.json()
        response = requests.get(response.links['next']['url'])
    total += response.json()
    totalJSON = json.dumps(total)
    with open("total_contributors.json", "w") as my_file:
        my_file.write(totalJSON)


def get_user_info():
    with open("total_contributors.json", "r") as myFile:
        fileJson = myFile.read()

    rawData = json.loads(fileJson)
    total = []
    totalRepos = []
    headers = {'Authorization': 'token ' +
                                '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'}
    for item in tqdm(rawData):
        response = requests.get(item['url'], headers=headers)
        total += [response.json()]
        respRepositories = requests.get(item['url'] + '/repos', headers=headers)
        totalRepos += [respRepositories.json()]

    totalJSON = json.dumps(total)
    totalReposJSON = json.dumps(totalRepos)

    with open("users_data_repos.json", "w") as my_file:
        my_file.write(totalReposJSON)

    with open("users_data.json", "w") as my_file:
        my_file.write(totalJSON)


def expand_contributors_info():
    with open("total_contributors.json", "r") as myFile:
        fileJson = myFile.read()

    rawData = json.loads(fileJson)
    total = []

    with open("users_events.json", "r") as myFile:
        fileJson = myFile.read()

    dataEvents = json.loads(fileJson)

    with open("top5lang_by_user.json", "r") as myFile:
        fileJson = myFile.read()

    userLangs = json.loads(fileJson)

    with open("users_data.json", "r") as myFile:
        fileJson = myFile.read()

    userData = json.loads(fileJson)


    for item in tqdm(rawData):
        # response = requests.get(item['url'], headers=headers)
        # total += [item['login']]
        login = item['login']
        user_events = dataEvents[login]
        events_cnt = len(user_events['events'])
        issues_cnt = user_events['issues_cnt']
        issues_comments_cnt = user_events['issues_comments_cnt']
        issues_closed_cnt = user_events['issues_closed_cnt']

        langs_str = ""
        if userLangs.get(login) is None:
            langs_str = ""
        else:
            user_langs = userLangs[login]
            qq = []
            user_langs_keys = user_langs.keys()
            i = 0
            for q in user_langs_keys:
                qq.append(q)
                i = i + 1
                if i == 3:
                    break
            langs_str = " ".join(qq)

        followers = 0
        following = 0
        for el in userData:
            if el['login'] == login:
                following = el['following']
                followers = el['followers']

        if item.get('issue') is None:
            item['issue'] = issues_cnt
        if item.get('stack') is None:
            item['stack'] = langs_str
        if item.get('issue_closed') is None:
            item['issue_closed'] = issues_closed_cnt
        if item.get('following') is None:
            item['following'] = following
        if item.get('followers') is None:
            item['followers'] = followers
        if item.get('issue_comments') is None:
            item['issue_comments'] = issues_comments_cnt
        if item.get('events') is None:
            item['events'] = events_cnt

        total.append(item)

    totalJSON = json.dumps(total)

    with open("users_logins_upd.json", "w") as my_file:
        my_file.write(totalJSON)


def get_events():
    base_url = "https://api.github.com/users/{}/events"

    allowed_events = ['IssuesEvent', 'IssueCommentEvent']

    with open("users_logins.json", "r") as myFile:
        fileJson = myFile.read()

    rawData = json.loads(fileJson)
    total = []
    headers = {'Authorization': 'token ' +
                                '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'}
    events = set()
    users_events = dict()
    issues_cnt = 0
    issues_comments_cnt = 0
    q = 0
    for item in tqdm(rawData):
        user_issues_cnt = 0
        user_issues_comments_cnt = 0
        user_issues_closed_cnt = 0
        response = requests.get("https://api.github.com/users/{}/events".format(item), headers=headers)
        if users_events.get(item) is None:
            users_events[item] = dict()
            if users_events.get(item).get('events') is None:
                users_events[item]['events'] = list()
        for r in response.json():
            if r['type'] in allowed_events:
                event = r['type']
                if event == "IssuesEvent" or event == "IssueCommentEvent":
                    title = r['payload']['issue']['title']
                    issue_comments_cnt = r['payload']['issue']['comments']
                    body = r['payload']['issue']['body']
                    html_url = r['payload']['issue']['html_url']

                    status = ''
                    if event == "IssuesEvent":
                        status = r['payload']['action']
                        issues_cnt = issues_cnt + 1
                        user_issues_cnt = user_issues_cnt + 1

                    comment = ''
                    if event == "IssueCommentEvent":
                        comment = r['payload']['comment']['body']
                        issues_comments_cnt = issues_comments_cnt + 1
                        user_issues_comments_cnt = user_issues_comments_cnt + 1

                    x = dict()
                    x['event'] = event
                    x['title'] = title
                    x['issue_comments_cnt'] = issue_comments_cnt
                    x['body'] = body
                    x['html_url'] = html_url
                    if event == "IssueCommentEvent":
                        x['comment'] = comment
                    if event == "IssuesEvent":
                        x['is_closed'] = (status == 'closed')
                        if x['is_closed']:
                            user_issues_closed_cnt = user_issues_closed_cnt + 1
                    users_events[item]['events'].append(x)

        if users_events.get(item).get('issues_cnt') is None:
            users_events[item]['issues_cnt'] = user_issues_cnt
        if users_events.get(item).get('issues_comments_cnt') is None:
            users_events[item]['issues_comments_cnt'] = user_issues_comments_cnt
        if users_events.get(item).get('issues_closed_cnt') is None:
            users_events[item]['issues_closed_cnt'] = user_issues_closed_cnt

    if users_events.get('issues_cnt') is None:
        users_events['issues_cnt'] = issues_cnt
    if users_events.get('issues_comments_cnt') is None:
        users_events['issues_comments_cnt'] = issues_comments_cnt

    totalJSON = json.dumps(users_events)

    with open("users_events.json", "w") as my_file:
        my_file.write(totalJSON)


def get_contributions():
    with open("total_contributors.json", "r") as myFile:
        fileJson = myFile.read()

    rawData = json.loads(fileJson)
    total = []

    i = 0
    for item in tqdm(rawData):
        d = {item['login']: item['contributions']}
        total += [d]
        i = i + 1
        if i == 10:
            break

    totalJSON = json.dumps(total)

    with open("top10_contributors.json", "w") as my_file:
        my_file.write(totalJSON)


def get_repos_lang():
    with open("users_data_repos.json", "r") as myFile:
        fileJson = myFile.read()

    rawData = json.loads(fileJson)
    languages = []

    langs = dict()

    headers = {'Authorization': 'token ' +
                                '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'}
    j = 0
    for item in tqdm(rawData):
        for i in range(len(item)):
            login = item[i]['owner']['login']
            respLang = requests.get(item[i]['languages_url'], headers=headers)
            if langs.get(login) is None:
                langs[login] = {}
            for key, value in respLang.json().items():
                assert langs.get(login) is not None
                if langs.get(login).get(key) is None:
                    langs[login][key] = value
                else:
                    tmp = langs[login][key]
                    tmp = tmp + value
                    langs[login][key] = value

        time.sleep(1)

    languagesJSON = json.dumps(langs)

    with open("users_repos_lang.json", "w") as my_file:
        my_file.write(languagesJSON)


if __name__ == '__main__':
    get_contributors(URL)
    get_user_info()
    expand_contributors_info()
    get_events()
    get_contributions()
    get_repos_lang()
