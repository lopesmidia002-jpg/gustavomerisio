import urllib.request
import re

url = 'http://localhost:3000/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')
    status = resp.status

print(f"Page status: {status}")
print(f"HTML size: {len(html)} bytes")

# Extract all img src
img_srcs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', html)
all_assets = set(img_srcs + ['css/style.css', 'js/main.js'])

failed = []
ok_count = 0
for asset in sorted(all_assets):
    if not asset:
        continue
    asset_url = f"http://localhost:3000/{asset}"
    try:
        r = urllib.request.urlopen(urllib.request.Request(asset_url, headers={'User-Agent': 'Mozilla/5.0'}))
        if r.status == 200:
            ok_count += 1
            print(f"  [OK 200] {asset}")
        else:
            failed.append((asset, r.status))
    except Exception as e:
        failed.append((asset, str(e)))

print("=" * 60)
if failed:
    print(f"FAILED {len(failed)} assets: {failed}")
else:
    print(f"PERFECT! All {ok_count} static assets returned HTTP 200 OK via Docker!")
print("=" * 60)
