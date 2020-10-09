+++
date = "2014-08-28T21:39:11+02:00"
draft = false
title = "Purpose in UX"
url = "written/purpose-in-ux"
+++

In a recent project, the aim is to build a new video editor. The aim of this editor is to spilt a video in certain segments, each with a start and an endpoint.

The editor consist of three "pages". One lets you choose the video to edit, one gives you an overview of the already existing segments and the final page lets you edit a segment.

The video is embedded in our CMS and gets used for different use cases. One use case is to select a segment to insert it into a CMS article. Another use case is to cut a new video into different segements.

When we started with the integration, it became obvious how different the editor is used for this two use cases. The editor supports both use cases, but of course it doesn't know which use case is used.

So, we changed that. The CMS appends an additional GET parameter called `purpose`. When we think the CMS user is going to pick a video, we give the editor the purpose "selection". If we think it is used for cutting the video apart we use the purpose "cut".

This means we can adjust the editor to the use case. In case of selection we can add a "select" button already in the segment overview. And when the use case is "cut", we can add a button in the segment editor to easily save the segment and create a new one.

This changes didnt take a lot of efforts to implement, yet I think the additional benefits for our users is quite big.

