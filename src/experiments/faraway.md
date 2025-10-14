---
title: "Seems different from far away"
category: "Experiment"
summary: "A single-stroke portrait created with p5.js for a collaboration with Probiere bringts."
image: "/assets/images/from_far_away.png"
order: 2
tags:
  - experiment
layout: layouts/article.njk
date: 2022-07-01
links:
  - label: "View full screen"
    url: "/p5js/faraway/"
  - label: "View on the p5.js editor"
    url: "https://editor.p5js.org/urban/sketches/_wJiaSFMS"
---

This sketch draws a portrait in a single, continuous line. I worked with **Probiere bringts** on an illustration that could also be plotted with a pen plotter. 

The image is separated in a grid and we get the "darkness" of each cell. The darkness defines how many times the cell has to be visited by the one, continuous line. The darker, the more the cell has to be visited. It chops the source image into a grid and checks how dark each square is. Dark squares ask the line to pass through them more often, light squares less. A random starting square is picked, and the line keeps hopping to nearby squares that still "owe" visits, drawing short segments between random points inside each square until every square has had its required number of passes. The final drawing is just one continuous stroke that hints at the original photo.

<div class="sketch-embed">
  <iframe
    src="/p5js/faraway/"
    title="Seems different from far away sketch"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>

- Techniques: sampling an image and plotting a single polyline
- Made with: p5.js
