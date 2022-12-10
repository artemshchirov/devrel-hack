import json
import requests

URL = 'https://api.github.com/repos/spring-projects/spring-boot/contributors?per_page=100&page=1'


def get_contributors(url):
    response = requests.get(url)
    total = []
    count = 0
    while 'next' in response.links:
        total += response.json()
        response = requests.get(response.links['next']['url'])
    total += response.json()
    totalJSON = json.dumps(total)
    with open("get_contributors.json", "w") as my_file:
        my_file.write(totalJSON)


if __name__ == '__main__':
    get_contributors(URL)
