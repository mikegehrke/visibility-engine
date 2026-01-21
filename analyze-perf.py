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
audit_keys = [
    'render-blocking-resources',
    'unused-css-rules',
    'unused-javascript',
    'uses-text-compression',
    'server-response-time',
    'total-byte-weight',
    'dom-size'
]
for key in audit_keys:
    audit = audits.get(key)
    if audit and audit.get('score') is not None and audit['score'] < 1:
        title = audit['title']
        savings = audit.get('displayValue', 'N/A')
        score = audit['score']
        issues.append((score, title, savings))

issues.sort()
for score, title, savings in issues[:10]:
    print(f"  [{int(score*100)}%] {title}: {savings}")
