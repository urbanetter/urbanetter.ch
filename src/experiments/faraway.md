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

This sketch draws a portrait in a single, continuous line. I worked with **Probiere bringts** on an illustration that could also be plotted with a pen plotter. The image is separated in a grid and we get the "darkness" of each cell. The darkness defines how many times the cell has to be visited by the one, continous line. The darker, the more the cell has to be visited.

The the line starts at a random cell and finds the next cell which has to be visiteted in a random direction. The count, how many times the cell has to be visited is then decremented.

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
