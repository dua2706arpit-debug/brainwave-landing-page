import bs4
import json

html_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\07e0e41a-7c2e-4bb2-b85f-a5a99c459fc5\.system_generated\steps\5\content.md"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

if "---" in content:
    parts = content.split("---", 1)
    if len(parts) > 1:
        content = parts[1]

soup = bs4.BeautifulSoup(content, 'html.parser')

images = []
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
    alt = img.get('alt', '')
    if src and src.startswith('http'):
        images.append({"src": src, "alt": alt})

print(json.dumps(images, indent=2))
