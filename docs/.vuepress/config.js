import { defineUserConfig } from 'vuepress'

import { defaultTheme } from '@vuepress/theme-default'

import { sidebarNote } from './config/config'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'zoutao98\'s blogs',
    description: 'zoutao98 的博客',
    theme: defaultTheme({
        lastUpdatedText: '上次更新',
        lastUpdated: false,
        sidebar: sidebarNote,
        contributors: false,
    })
})