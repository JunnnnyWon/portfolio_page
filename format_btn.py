import re
with open('src/components/ProjectDetailPage.tsx', 'r') as f:
    text = f.read()

text = text.replace('포트폴리오로 돌아가기', '← BACK TO PORTFOLIO')

with open('src/components/ProjectDetailPage.tsx', 'w') as f:
    f.write(text)
print("Button text formatted.")
