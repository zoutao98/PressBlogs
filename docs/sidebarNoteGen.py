import os
import sys

def walkFloder(dirName):
    res = os.walk(dirName)


sideBar = []
reocde = {}

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
                    print("pre: "+os.path.join("/"+basePath, prefix[1:], file))


                    sideBar.append({'collapsible': True,})
                    print(f"basedir:{basedir}, {file}")

    print(sideBar)

