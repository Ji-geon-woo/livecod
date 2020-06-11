import requests
from bs4 import BeautifulSoup

from utils import write_data


def get_data(url):
    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")
    data = soup.find_all("a", class_="_sp_each_title")
    return data


def parse_data(data):
    return [{'title': tag.get_text(), 'link': tag['href']} for tag in data]


def run():
    data = get_data("https://search.naver.com/search.naver?query=코로나+확진자&where=news")
    parsed_data = parse_data(data)

    save_dir = './data/koreaNewsData.js'
    crawler_name = 'crawlKoreaNewsData.py'
    var_name = 'koreaNewsData'

    write_data(parsed_data, save_dir, crawler_name, var_name)




print("#####################################")
print("############ 한국 뉴스 데이터 #############")
print("######## koreaNewsData.js #########")

run()

print("############### 완료!! ###############")
print("#####################################")
