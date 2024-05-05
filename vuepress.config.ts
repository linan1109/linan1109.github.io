import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',

  title: ' ',
  description: ' ',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {text:'HOME', link:'/'},
      {text:'Education', link:'/education/'},
      {text:'Projects', link:'/projects/'},
    ],
    
  }),

  bundler: viteBundler(),

  plugins: [
    copyCodePlugin({
      // options
    }),
    registerComponentsPlugin({
      components:{
        ProfileSection: path.resolve(__dirname, './docs/.vuepress/components/ProfileSection.vue'),
        ProjectCard: path.resolve(__dirname, './docs/.vuepress/components/ProjectCard.vue'),
        ShowHideDetail: path.resolve(__dirname, './docs/.vuepress/components/ShowHideDetail.vue'),
        ProjectDetail: path.resolve(__dirname, './docs/.vuepress/components/ProjectDetail.vue'),
      }
    }),
    externalLinkIconPlugin({
      

    }),

  ],
})
