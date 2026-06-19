---
sidebar: auto
sidebarDepth: 2
home: true
title: Nan Li
externalLinkIcon: false
pageClass: home-page
lang: en-US
# some data for the components

name: Nan Li
profile: /profile.png

socials:
  - title: GitHub
    icon: "/icons/logo-github.svg"
    link: https://github.com/linan1109
  - title: LinkedIn
    icon: "/icons/logo-linkedin.svg"
    link: https://www.linkedin.com/in/linan1109
  - title: nan.li@irm.uzh.ch
    icon: "/icons/mail-outline.svg"
    link: mailto:nan.li@irm.uzh.ch
  - title: CV
    icon: "/icons/document-outline.svg"
    link: /cv/cv.pdf
  - title: Zurich, Switzerland
    icon: "/icons/map-pin.svg"
    link: https://maps.app.goo.gl/ccXh2msqR15znt2j7

footer: MIT Licensed | Powered by VuePress
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Hi, I'm Nan, a PhD student in Data Science at the [University of Zurich (UZH)][uzh-home].
I hold an MSc in Computer Science (Informatik) with a specialization in Artificial Intelligence, also from [UZH][uzh-home].
Prior to that, I earned my Bachelor's degree in Software Engineering from [Beihang University (BUAA)][buaa-home] in Beijing.

My research centers on machine learning for time-series data, with a particular focus on interpretability and explainability.
I work on multivariate time-series modeling across domains such as driving behavior and physiological signals.
I'm also interested in Human-Computer Interaction and Software Engineering, exploring how AI can be made more intuitive and accessible for everyone.My research focuses on leveraging machine learning algorithms to address real-world challenges while emphasizing their interpretability and explainability.

## Education

[→ To More Details][education-detail]

- Oct. 2024 - Present: PhD in Data Science, [University of Zurich][uzh-home], Switzerland
- Sep. 2022 - Oct. 2024: Master of Science in Computer Science, [University of Zurich][uzh-home], Switzerland
- Sep. 2016 - Jun. 2021: Bachelor of Engineering in Software Engineering, [Beihang University][buaa-home], China

## Projects

[→ To Full List][projects-detail]

<ProjectCard image="/projects/adhd.png" hideBorder=true>

**Stimulant Drug Holidays and Driving Performance in Adults with ADHD**

A randomized crossover trial studying how stimulant drug holidays affect simulated driving in adults with ADHD, applying interpretable time-series machine learning to multimodal driving data.

[[Protocol](http://dx.doi.org/10.21203/rs.3.rs-8611309/v1)]
</ProjectCard>

<ProjectCard image="/projects/anymal.png" hideBorder=true>

**Multi-Robot Interactive Simulation and Analysis Platform**

This project addresses the challenges roboticists face in training locomotion policies by developing an interactive simulation and visualization framework.
The framework is designed to facilitate the learning process for quadrupedal locomotion, enabling more efficient and effective policy comparison and communication.

Paper accepted by Graphics Interface 2025
[[Paper](https://dl.acm.org/doi/full/10.1145/3769872.3769898)] [[Code](https://github.com/linan1109/MIRSA)] [[Try It Out](https://linan1109.github.io/MIRSA/js/)]

</ProjectCard>

<ProjectCard image="/projects/rose.png" hideBorder=true>

**Explanation Methods for Recommender Systems**

Conducted research and implemented explanation methods for recommender systems’ outputs, along
with quantitative metrics to evaluate these explainers.

</ProjectCard>

## Publications

[1] **Nan Li**, Fan Shi, Xiaoyu Zhang, April Yi Wang. *MRISA: A Visual Analytics Approach for Comparing Locomotion Policies in Robotics Training.* Graphics Interface 2025. [[DOI](https://doi.org/10.1145/3769872.3769898)]

[2] **Nan Li**, Veronika Gambin, Boris Quednow, Pascal Burger, Ana Buadze, Benjamin Offenhammer, Kristina Keller, Stefan Lakämper. *Impact of drug holidays on simulated driving performance in adults with ADHD: a study protocol for a randomized crossover trial.* (Under review) [[Preprint](http://dx.doi.org/10.21203/rs.3.rs-8611309/v1)]

[3] Veronika Gambin, **Nan Li**, Esther Irene Schwarz, Kristina Keller, Stefan Lakämper. *Validating a novel driving simulation-based MWT against the standard MWT in an OSA-cohort challenged by CPAP-withdrawal (DS-MWT2).* PLOS One (Accepted) [[Preprint](http://dx.doi.org/10.64898/2026.01.18.26344362)]

[4] Tzvetan Popov, **Nan Li**, Veronika Gambin, Kristina Keller, Samuel Wehrli, Stefan Lakämper. *Predicting driver distraction using a single channel ear EEG.* (Under review) [[Preprint](https://doi.org/10.64898/2026.01.24.701469)]

[5] Tzvetan Popov, **Nan Li**, Veronika Gambin, Kristina Keller, Samuel Wehrli, Stefan Lakämper. *The neuro-ocular costs of texting during driving.* (Under review) [[Preprint](http://dx.doi.org/10.1101/2025.08.15.670515)]

## On-Campus Works

- Fall 2025: Teaching Assistant in the lecture ["BIO134 Programming in Biology"][this-site] at the University of Zurich
- Fall 2023: Practical Tutor in the lecture ["Foundations of Data Science"][fds] (MSc & PhD) at the University of Zurich
- Fall 2020: Teaching Assistant in the lecture ["Compiler Theory"][this-site] (BEng) at Beihang University
- Spring 2020: Head Teaching Assistant in the lecture ["Object-Oriented Programming (Java)"][this-site] (BEng) at Beihang University
- Fall 2019: Teaching Assistant in the lecture ["Algorithm Analysis and Design"][this-site] (BEng) at Beihang University

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

[uzh-home]: https://www.uzh.ch/en.html

[buaa-home]: https://ev.buaa.edu.cn/

[bosch-iot]: https://www.iot-lab.ch/

[eth-home]: https://ethz.ch/en.html

[education-detail]: /education/

[projects-detail]: /projects/

[fds]: https://www.ifi.uzh.ch/en/dast/teaching/FDS.html

[this-site]: /

