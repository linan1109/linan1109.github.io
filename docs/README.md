---
sidebar: auto
sidebarDepth: 2
home: true
title: Nan Li
externalLinkIcon: false
pageClass: home-page
lang: en-US
# some data for the components

name: Veronika Gambin
profile: /profile.png

socials:
#  - title: GitHub
#    icon: "/icons/logo-github.svg"
#    link: https://github.com/linan1109
  - title: LinkedIn
    icon: "/icons/logo-linkedin.svg"
    link: https://www.linkedin.com/linan1109](https://www.linkedin.com/in/veronika-gambin/
  - title: veronika.gambin@uzh.irm.ch
    icon: "/icons/mail-outline.svg"
    link: mailto:veronika.gambin@uzh.irm.ch
  - title: CV
    icon: "/icons/document-outline.svg"
    link: /cv/cv.pdf
  - title: Zurich, Switzerland
    icon: "/icons/map-pin.svg"
    link: https://maps.app.goo.gl/ddX75yrfZHpC1jag6](https://maps.app.goo.gl/dApBUWdUZVYk4g7X7

footer: MIT Licensed | Powered by VuePress
---



<ProfileSection :frontmatter="$page.frontmatter" />


## About Me

Hi, I'm Nan, a PhD student in Neuroscience at the [University of Zurich（UZH)][uzh-home].
I hold an MSc in Neuroscience (Informatik) with a specialization in Artificial Intelligence, also from [UZH][uzh-home]. 

Prior to that, I earned my Bachelor's degree in Software Engineering from [Beihang University (BUAA)][buaa-home] in Beijing.

My research focuses on leveraging machine learning algorithms to address real-world challenges while emphasizing their interpretability and explainability. 
I’m also deeply interested in the fields of Human-Computer Interaction and Software Engineering, exploring how AI can be made more intuitive and accessible for everyone.


[uzh-home]: https://www.uzh.ch/en.html
[buaa-home]: https://ev.buaa.edu.cn/
[bosch-iot]: https://www.iot-lab.ch/
[eth-home]: https://ethz.ch/en.html

## Education

[→ To More Details][education-detail]
 - Oct. 2024 - Present: PhD in Data Science, [University of Zurich][uzh-home], Switzerland
 - Sep. 2022 - Oct. 2024: Master of Science in Computer Science, [University of Zurich][uzh-home], Switzerland
 - Sep. 2016 - Jun. 2021: Bachelor of Engineering in Software Engineering, [Beihang University][buaa-home], China

[education-detail]: /education/


## Projects

[→ To Full List][projects-detail]

<ProjectCard image="/projects/1.png" hideBorder=true>

  **Interpretable Machine Learning Algorithm for Drunk Driving Detection**


Crafted interpretable machine learning algorithms for drunk driving detection utilizing a multi-sensor dataset. 
Emphasized precision and interpretability, employing diverse techniques in multivariate time-series classification tailored for driving data analysis.

  [[Website](https://www.iot-lab.ch/projects-connectedmobility/drive/)] [[SRF video](https://www.iot-lab.ch/news/our-in-vehicle-drunk-driving-detection-featured-on-srf-swiss-tv/)] 

</ProjectCard>

<ProjectCard image="/projects/anymal.png" hideBorder=true>

  **Multi-Robot Interactive Simulation and Analysis Platform**

This project addresses the challenges roboticists face in training locomotion policies by developing an interactive simulation and visualization framework.
The framework is designed to facilitate the learning process for quadrupedal locomotion, enabling more efficient and effective policy comparison and communication.

</ProjectCard>


<ProjectCard image="/projects/rose.png" hideBorder=true>

  **Explanation Methods for Recommender Systems**

Conducted research and implemented explanation methods for recommender systems’ outputs, along
with quantitative metrics to evaluate these explainers. 

</ProjectCard>

[projects-detail]: /projects/


## On-Campus Works

- Fall 2023: Practical Tutor in the lecture ["Foundations of Data Science"][fds] (MSc & PhD) at the University of Zurich
- Fall 2020: Teaching Assistant in the lecture ["Compiler Theory"][this-site] (BEng) at Beihang University
- Spring 2020: Head Teaching Assistant in the lecture ["Object-Oriented Programming (Java)"][this-site] (BEng) at Beihang University
- Fall 20129: Teaching Assistant in the lecture ["Algorithm Analysis and Design"][this-site] (BEng) at Beihang University

[fds]: https://www.ifi.uzh.ch/en/dast/teaching/FDS.html
[this-site]: /

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

.medium-zoom-image--opened {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100vh;
  object-fit: contain;
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
}

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
