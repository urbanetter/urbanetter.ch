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

This sketch draws a portrait in a single, continuous line. I worked with **Probiere bringts** on an illustration that could also be plotted with a pen plotter. The line weight changes based on the underlying brightness of the reference image, which helps to keep the facial features readable from a distance.

The final render is printed as risograph layers in black and neon pink. Coding the sketch in p5.js made it fast to tweak the flow of the line while the plotter patiently traced every pixel.

<div class="sketch-embed">
  <iframe
    src="/p5js/faraway/"
    title="Seems different from far away sketch"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>

- Techniques: sampling an image and plotting a single polyline
- Made with: p5.js, Illustrator, and an AxiDraw plotter
