import json
import os
import sys

def walkFloder(dirName):
    res = os.walk(dirName)


sideBars = []
reocde = {}

text = {
    'accesscontrol':'访问控制',
    'embeddedc':'嵌入式',
    'file-io':'文件IO'
    }

if __name__ == '__main__':
    basePath = "myblog"
    execPath = os.path.dirname(os.path.realpath(__file__))
    walkPath = os.path.join(execPath, basePath)
    print(walkPath)
    for dirpath, dirnames, filenames in os.walk(walkPath):
        basedir = os.path.basename(dirpath)
        if basedir:
            for file in filenames:
                if file.endswith('.md'):
                    prefix = dirpath.split(basePath)[1]
                    prefix = "/".join(prefix.split("\\"))
                    prefix = "/".join(["/"+basePath, prefix[1:], file])
                    try:
                        reocde[basedir]
                        for sidebar in sideBars:
                            if sidebar['text'] == basedir:
                                sidebar['children'].append(prefix)
                    except:
                        reocde[basedir] = basedir
                        try:
                            text[basedir]
                            sideBars.append({'collapsible': True, 'text': text[basedir], 'children': [prefix,]})
                        except:
                            sideBars.append({'collapsible': True, 'text': basedir, 'children': [prefix,]})

                    print(f"{basedir}, {file}")

    # print(sideBars)
    # print("\\\"".join(json.dumps(sideBars).split("\"")))

    jsfile = os.path.join(execPath, ".vuepress", "config", "config.js")
    # print(jsfile)

    with open(jsfile, 'w') as f:
        f.write("export const sidebarNote = {\n    '/': JSON.parse(\"%s\")\n}" % "\\\"".join(json.dumps(sideBars).split("\"")))

