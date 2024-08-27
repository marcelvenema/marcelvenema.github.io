---
title: "Add applications to a MDT Reference Image"
description: ""
date: 2018-03-15T09:00:00+01:00
lastmd: 2018-03-15T09:00:00+01:00
image_cover: "jandira-sonnendeck-AcW1ZwD-qC0-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Part 3 of 6: **Add optional applications to the Reference Image** 
The next (optional) step in creating a Reference Image Factory is adding applications or customizations to the Reference Image. 

<!--more-->
{{< image src="jandira-sonnendeck-AcW1ZwD-qC0-unsplash.jpg" alt="" >}}

I configure the Reference image with typical customizations or installations I use for all server builds, like enable high performance power scheme, install .NET frameworks, install Visual C++ runtime libraries, etc.  All these applications require a lot of updates and it saves time to include them to install/configure them with the latest updates in the reference image. 

Another possibility is to create an extra reference image with Microsoft Office installed. Office has many updates and the main goal of a reference image to keep the deployment time of your servers and workstations as short as possible. 
Typically, I add the following customizations and applications to the Reference Image:

**Install .NET framework**
Many server applications are using the .NET framework. This is a default installation of my Reference Image. It also have many updates, so when I deploy a fresh server, the Reference Image already includes these updates.

**Set power scheme to High Performance**
I deploy virtual machines, so the power scheme must be set to High Performance to avoid hibernation of VM’s.

**Install Visual C++ runtime libraries**
Besides the .NET framework I also install the visual C++ runtime libraries. These are used by many applications and have many updates so it is better to include them in the Reference Image.

**Set Reference Image version**
When a Reference Image is created, I ‘tattoo’ the registry HKLM\Software\AF with an installation date and a Reference Image version. 

**VMWare ESX Agent**
On virtual machines running on the VMWare vSphere hypervisor, I install the VMWare ESX agent. 

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@jandira_sonnendeck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jandira Sonnendeck</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-disc-with-a-toothbrush-on-top-of-it-AcW1ZwD-qC0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
