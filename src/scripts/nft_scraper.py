import json
from requests_html import HTMLSession

root_address = 'https://coinmarketcap.com/nft/collections'
session = HTMLSession()
page_limit = 20

def scrape_nfts(data):
    print('Scraping NFTs...')
    pages = []
    for page_number in range(1, page_limit+1):
        pages.append(root_address + '/?page=' + str(page_number))

    for page in pages:
        print("Scrapping... page: " + str(page))
        try:

            r = session.get(page)
            r.html.render(scrolldown=16, sleep=0.1, timeout=30.0)

            rows = r.html.find('tbody tr')

            for row in rows:
                try:
                    d = dict()
                    columns = row.find('td')
                    if columns[1].find('div', first=True) is not None:
                        d['rank'] = columns[0].text.strip()
                        d['img'] = columns[1].find('img', first=True).attrs['src']
                        name_and_net = columns[1].find('span')
                        d['name'] = name_and_net[0].text.strip()
                        if len(name_and_net) > 1:
                            d['network'] = name_and_net[1].text.strip()
                        else:
                            d['network'] = '-'
                        d['price'] = columns[2].text

                        market_cap_col = columns[3]
                        if columns[3].text.strip() != '--':
                            d['market_cap'] = market_cap_col.text
                        else:
                            d['market_cap'] = '-'

                        d['floor_price'] = columns[4].text

                        d['avg_price'] = columns[5].text
                        d['sales'] = columns[6].text
                        d['assets'] = columns[7].text
                        d['owners'] = columns[8].text
                        d['owners_percent'] = columns[9].text
                        # obtain nft info address
                        asset_url = d['img']
                        try:
                            portions = asset_url.split("/")
                            relevant = portions[2:]
                            relevant[0] = ".".join(relevant[0].split(".")[1:])
                            relevant = relevant[:1]+relevant[2:]
                            relevant[-1] = relevant[-1].split(".")[0]
                            d['url'] = "/".join(relevant)
                        except:
                            d['url'] = "https://coinmarketcap.com/cloud/img/icon/broken-nft-img/"

                    data.append(d)
                except:
                    continue
        except:
            continue

    return data


def save_json(data):
    with open('NFTs.json', 'w') as f:
        json.dump(data, f)


def open_json():
    with open('NFTs.json', 'r') as f:
        return json.load(f)


def main():
    data = []
    data = scrape_nfts(data)
    save_json(data)

    print('Done.')


if __name__ == '__main__':
    main()