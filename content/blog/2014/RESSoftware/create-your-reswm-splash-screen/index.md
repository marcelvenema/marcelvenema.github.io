---
title: "Create your Workspace Manager splash screen"
description: ""
date: 2014-02-03T09:00:00+01:00
lastmod: 2014-02-03T09:00:00+01:00
image_cover: "walls-io-tMtas1_tHkk-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: ["RESWM"]
draft: false
---

With the release of the new RES Workspace Manager 2014 system administrators can now create a custom splash screen when starting the Workspace Composer.

<!--more-->


{{< image src="walls-io-tMtas1_tHkk-unsplash.jpg" alt="Create RESWM splash screen" >}}

This was already possible with previous versions, but only after permission of RES Software and was quite a complicated process. You have to send the logos and artwork to RES and they send you a special crafted respfrebranding.xml file back. 

This file has to be copied into the custom_resources folder. The story goes that in the early days the rebranding tool only exists on the notebook of Bob Janssen, the founder of RES Software and that between shareholder meetings the rebranding for customers was made :-)


In the old rebranding you can change the logo, the background, the location of the items, the color of the progress bar and an optional OEM label. 


RES Software introduces in Workspace Manager 2014 an option to do the rebranding yourself. You can select your own progress bar color and logo. If you are using the old respfrebranding.xml file, this still works with RES Workspace Manager 2014. 


For the rebranding option in Workspace Manager 2014, go to Setup – Workspace branding menu and upload a logo and select a color. The logo must be 268x134 pixels and can be BMP, GIF or JPG format.


I strongly suggest to rebrand the splash screen with your own company logo. Studies show that the user acceptance of the workspace is much higher when using an own company logo instead of the RES Software logo. It is a mind thing, people feel more ‘connected’ to their own company.


I also would make a feature request to RES Software. Add workspace container functionality to the rebranding option, so each department, or for multi-tenant environments, each entity can have its own branding and still have only one datastore.

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@walls_io?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Walls.io</a> on <a href="https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-desk-tMtas1_tHkk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
