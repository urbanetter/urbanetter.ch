---
title: "Smart Frame"
category: "Project"
summary: "A digital display system for cycling through creative content like generative art, clocks, and images with Firebase backend."
role: "Side project · Creator"
order: 3
tags:
  - project
layout: layouts/article.njk
---

Smart Frame is a wall-mounted digital picture frame that rotates fresh images, short animations, and generative sketches without a trip to the printer. 

![The only existing smart frame in the world](/assets/images/smart-frame.jpg)

The hardware is just a Raspberry Pi 4 and a touch display hidden inside a wooden frame.

![The power to steer the content of the smart frame](/assets/images/smart-frame-admin.jpg)

On the software side a small Vue + Vuetify app talks to Firebase. I toggle which pieces are live through a simple list, and for now I drop new slides straight into Firestore.

The frame understands several content types—p5.js sketches, a real-time clock, static images and text, embedded pages, and custom widgets. Firestore stores frames (collections) and views (items) with optional durations so the fullscreen player advances automatically. The project ships with two modes: an admin dashboard for managing content and a fullscreen player optimised for the physical frame.
