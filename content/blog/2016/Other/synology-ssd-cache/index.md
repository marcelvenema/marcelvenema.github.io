---
title: "Synology SSD cache"
description: ""
date: 2016-04-02T09:00:00+01:00
lastmod: 2016-04-02T09:00:00+01:00
image_cover: "syno_ssd.jpg"
categories: ["Other"]
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

I am a big fan of the Synology NAS. I am using this for almost 8 years and upgraded over time from my former DS210j two bay NAS to currently the eight bay DS1815+.

<!--more-->
{{< image src="syno_ssd.jpg" alt="" >}}

I am using the NAS mainly for iSCSI storage for my home lab. Of course I am also using other packages like surveillance station, download station, cloud backup, Sickbeard, Plex and others. To increase performance, I added two SSD drives. 

Initially I wanted to add only one SSD, hence I have only 8 bays, but then the SSD will function only as a read cache. To use read-write cache, you will need at least two SSD drives. 

I understand the why in an enterprise environment, but usage for usage in a home lab it is overkill. I needed read-write cache so at the end of the day I ended up with two SSD drives.
