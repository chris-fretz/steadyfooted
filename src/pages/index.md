---
title: Steadyfooted
page_setup:
  seo_description: Steadyfooted is run by Chris Fretz, web developer. It's his
    personal blog, portfolio site, and platform to explore code, politics, and
    theology.
layout: ../layouts/BaseLayout.astro
hero:
  - type: hero-with-image
    hero_image: src/assets/images/hero-homepage.webp
    heading: Steadyfooted
    subheading: <p>Taking it one step at a <a target="_blank"
      href="https://google.com">time</a></p>
blocks:
  - type: alt-content
    orientation: copy-left
    sections:
      - copy: <p>## Developer, Theologian, and Other Identities Welcome to Steadyfooted!
          I'm Chris Fretz, a husband, father, web developer, theologian, and
          person of faith. I made this website to show some of the websites and
          web dev projects I've worked on, as well as hosting a blog where I
          write about tech, current events, politics, spirituality, and anything
          else that catches my fancy. [About page](/about/)</p>
        circular: true
        image: src/assets/images/chris-fretz-2023.jpg
        alt_text: Chris Fretz, web developer
  - type: cards
    intro: <p>## My Work I've been a professional web developer since 2021, mostly
      specializing in WordPress sites for digital marketing agencies. I started
      as a front-end dev, but have been learning a lot about databases, APIs,
      headless content management systems (CMS) and other back-end tools.</p>
    cards:
      - image: src/assets/images/1920x500.webp
        heading: Projects I've built
        content: <p>I've built numerous web dev projects over the years. Check them out
          here.</p>
        url: /portfolio/
        link_text: Browse Portfolio
        new_tab: false
      - image: src/assets/images/1920x500.webp
        heading: PENS Stack
        content: <p>I built this site with Pages CMS, Eleventy, Netlify, and SASS. It's
          a simple, yet powerful tech stack for building content-driven static
          websites.</p>
        url: /pens-stack/
        link_text: Explore the PENS Stack
        new_tab: false
      - image: src/assets/images/1920x500.webp
        heading: Blog
        content: <p>I love reading, learning, and processing what I'm learning with
          others. This blog is a space for me to explore web development, Linux
          and other open source projects, current events, politics,
          spirituality, and other subjects</p>
        url: /blog/
        link_text: Read the Blog
        new_tab: false
  - type: contact-form
    heading: Get in Touch!
    intro: <p>Feel free to reach out if you'd like me to build a website or web app
      for you, if you'd like to invite me as a speaker on tech, religion, and/or
      current events, or if you'd like to collaborate in some other way.</p>
---
