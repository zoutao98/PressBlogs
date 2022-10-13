import json
import os
import sys

sideBars = []
reocde = {}

text = {
    'accesscontrol':'访问控制',
    'embeddedc':'嵌入式',
    'file-io':'文件IO',
    'java':'Java',
    '100spring-data-jpa':'Spring Data JPA',
    '001javabase':'Java基础',
    'python':'Python',
    'docker':'Docker',
    'caddy':'Caddy',
    'linux':'Linux',
    'zzzfutures':'期货',
    'vscode':'VSCode使用'
}

hide = [
    'file-io',
    'zzzfutures',
    'redis',
    'zzthiden'
]

baseDir = "myblog"
pythonExecPath = os.path.dirname(os.path.realpath(__file__))
walkPath = os.path.join(pythonExecPath, baseDir)

def addChildren():
    pass

def splicingSideBars(p: str, mp):
    if p:
        pList = p.split(baseDir)[1]
        pList = pList.split('\\')[1:]
        pLen = len(pList)
        hideStatus = False
        for i in range(pLen):
            if pList[i] in hide:
                hideStatus = True
                break
            try:
                pList[i] = text[pList[i]]
            except:
                pass
        if hideStatus:
            return
        currentSidebar = sideBars
        for i in range(pLen):
            exist = False
            existParent = False
            for sidebar in currentSidebar:
                try:
                    if sidebar['text'] == pList[i]:
                        exist = True
                        currentSidebar = sidebar
                        if pLen - i <= 1:
                            sidebar['children'].append(mp)
                        else:
                            existParent = True
                            exist = False
                        break
                except:
                    pass
            if not currentSidebar or not exist:
                if pLen - i <= 1:
                    currentSidebar.append({'collapsible': True, 'text': pList[i], 'children': [mp]})
                else:
                    if existParent:
                        currentSidebar = currentSidebar['children']
                    else:
                        currentSidebar.append({'collapsible': False, 'text': pList[i], 'children': []})
                        currentSidebar = currentSidebar[-1]['children']


def walkPathRecursion(path):
    for dirpath, dirnames, filenames in os.walk(path):
        parentPath = None
        currentDir = os.path.basename(dirpath)
        if currentDir != baseDir:
            parentPath = dirpath
        for file in filenames:
            if file.endswith('.md'):
                mdPath = dirpath.split(baseDir)[1]
                mdPath = "/".join(mdPath.split("\\"))
                mdPath = "/".join(["/"+baseDir, mdPath[1:], file])
                # print(mdPath)
                splicingSideBars(parentPath, mdPath)

walkPathRecursion(walkPath)

"""
for dirpath, dirnames, filenames in os.walk(walkPath):
    # print(dirpath, dirnames, filenames)
    basedir = os.path.basename(dirpath)
    # print(dirpath, os.path.dirname(dirpath), basedir)
    if basedir:
        for file in filenames:
            if file.endswith('.md'):
                # print(f"{basedir}, {file}")
                mdPath = dirpath.split(baseDir)[1]
                mdPath = "/".join(mdPath.split("\\"))
                mdPath = "/".join(["/"+baseDir, mdPath[1:], file])
                try:
                    reocde[basedir]
                    for sidebar in sideBars:
                        try:
                            if sidebar['text'] == text[basedir]:
                                sidebar['children'].append(mdPath)
                        except:
                            if sidebar['text'] == basedir:
                                sidebar['children'].append(mdPath)
                except:
                    reocde[basedir] = basedir
                    try:
                        text[basedir]
                        sideBars.append({'collapsible': True, 'text': text[basedir], 'children': [mdPath,]})
                    except:
                        sideBars.append({'collapsible': True, 'text': basedir, 'children': [mdPath,]})
""" 

jsfile = os.path.join(pythonExecPath, ".vuepress", "config", "config.js")

with open(jsfile, 'w') as f:
    f.write("export const sidebarNote = {\n    '/': JSON.parse(\"%s\")\n}" % "\\\"".join(json.dumps(sideBars).split("\"")))

