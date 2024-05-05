---
sidebar: auto
sidebarDepth: 2
home: true
title: Home

pageClass: home-page
# some data for the components

name: Nan Li
profile: /profile.png

socials:
  - title: GitHub
    icon: "/icons/logo-github.svg"
    link: https://github.com/linan1109
  - title: LinkedIn
    icon: "/icons/logo-linkedin.svg"
    link: https://www.linkedin.com/linan1109
  - title: nan.li@uzh.ch
    icon: "/icons/mail-outline.svg"
    link: mailto:nan.li@uzh.ch
  - title: CV
    icon: "/icons/document-outline.svg"
    link: /cv/cv.pdf


footer: MIT Licensed | Powered by VuePress
---



<ProfileSection :frontmatter="$page.frontmatter" />


## About Me

## Education

## Projects

## On-Campus Works

## Awards and Honors


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>