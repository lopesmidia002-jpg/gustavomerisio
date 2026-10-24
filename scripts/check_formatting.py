import re
from html.parser import HTMLParser

def check_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    class TagChecker(HTMLParser):
        def __init__(self):
            super().__init__()
            self.stack = []
            self.errors = []
            self.void_tags = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'}

        def handle_starttag(self, tag, attrs):
            if tag.lower() not in self.void_tags:
                self.stack.append((tag.lower(), self.getpos()))

        def handle_endtag(self, tag):
            t = tag.lower()
            if t in self.void_tags:
                return
            if not self.stack:
                self.errors.append(f'Unexpected closing tag </{t}> at line {self.getpos()[0]}')
                return
            last_tag, pos = self.stack.pop()
            if last_tag != t:
                self.errors.append(f'Mismatched tag: expected </{last_tag}> (opened at line {pos[0]}), got </{t}> at line {self.getpos()[0]}')

    parser = TagChecker()
    parser.feed(content)
    print("=== HTML TAG VALIDATION ===")
    print(f"Errors: {len(parser.errors)}")
    for err in parser.errors:
        print(" ", err)
    if parser.stack:
        print(f"Unclosed tags ({len(parser.stack)}):")
        for tag, pos in parser.stack:
            print(f"  <{tag}> opened at line {pos[0]}")
    else:
        print("  All HTML tags are properly closed and nested!")

    # Check internal hash links
    hrefs = re.findall(r'href=[\'"](#[\w-]+)[\'"]', content)
    ids = set(re.findall(r'id=[\'"]([^\'"]+)[\'"]', content))
    missing = [h for h in set(hrefs) if h[1:] not in ids]
    print("\n=== INTERNAL ANCHOR LINKS ===")
    if missing:
        print(f"  Missing target IDs for links: {missing}")
    else:
        print(f"  All {len(set(hrefs))} internal hash links point to valid IDs!")

    # Check images without alt
    no_alt = re.findall(r'<img(?![^>]*\balt=)[^>]*>', content)
    print("\n=== IMAGE ACCESSIBILITY ===")
    if no_alt:
        print(f"  Images missing alt: {len(no_alt)}")
    else:
        print("  All <img> tags have alt attributes!")

def check_css():
    with open('css/style.css', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    stack = []
    in_comment = False
    for line_idx, line in enumerate(lines, 1):
        i = 0
        while i < len(line):
            if not in_comment:
                if line[i:i+2] == '/*':
                    in_comment = True
                    i += 2
                    continue
                elif line[i] == '{':
                    stack.append((line_idx, line.strip()))
                elif line[i] == '}':
                    if stack:
                        stack.pop()
                    else:
                        print(f"Unexpected '}}' at line {line_idx}")
            else:
                if line[i:i+2] == '*/':
                    in_comment = False
                    i += 2
                    continue
            i += 1

    print("\n=== CSS SYNTAX VALIDATION ===")
    if stack:
        print(f"Unclosed CSS rules ({len(stack)}):")
        for line_no, content in stack:
            print(f"  Line {line_no}: {content}")
    else:
        print("  All CSS rules are properly closed!")

if __name__ == '__main__':
    check_html()
    check_css()
