#!/usr/bin/env python3
import sys
import json

data = json.load(sys.stdin)
audits = data['audits']

print('PERFORMANCE METRIKEN:')
print(f"FCP: {audits['first-contentful-paint']['displayValue']}")
print(f"LCP: {audits['largest-contentful-paint']['displayValue']}")
print(f"TBT: {audits['total-blocking-time']['displayValue']}")
print(f"CLS: {audits['cumulative-layout-shift']['displayValue']}")
print(f"Speed Index: {audits['speed-index']['displayValue']}")
print()
print('TOP VERBESSERUNGEN:')

issues = []
for key in ['render-blocking-resources', 'unused-css-rules', 'unused-javascript', 
            'uses-text-compression', 'server-response-time', 'total-byte-weight', 'dom-size']:
    if key in audits and audits[key].get('score') is not None and audits[key]['score'] < 1:
        title = audits[key]['title']
        savings = audits[key].get('displayValue', 'N/A')
        score = audits[key]['score']
        issues.append((score, title, savings))

issues.sort()
for score, title, savings in issues[:10]:
    print(f"  [{int(score*100)}%] {title}: {savings}")
