---
title: "Extract RES Workspace Manager agent"
description: ""
date: 2015-03-18T09:00:00+01:00
lastmod: 2015-03-18T09:00:00+01:00
image_cover: "paul-teysen-ewxjw7Gp77Q-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: ["Workspace Manager"]
draft: false
---

When downloading the RES Workspace Manager Installation files, you get an amazing 160MB executable. This .exe file is the RES Installer and contains the MSI installation files of the different RES Software Workspace Manager components. If you only need to install the Workspace Manager Agent which is 22MB, it is better to extract the MSI component and use this in the installation procedure.

<!--more-->

{{< image src="paul-teysen-ewxjw7Gp77Q-unsplash.jpg" alt="Extract RESWM" >}}

To extract the components start the installer and use the extract option from the GUI. You can also use the /extract:<path> commandline parameter.


The following installation files are extracted:

- Workspace Manager Agent
- Workspace Manager Console
- Workspace Manager Desktop Sampler
- Workspace Manager Language Pack
- Workspace Manager Reporting Services
- Workspace Manager Service Pack
- Workspace Manager Installer (agent and console)
- Workspace Manager Relay Server 64bit
- Workspace Manager Relay Server 32bit

&nbsp;

Please note it is not possible to do a console-only and agent-only installation side-by-side on the same workstation. Use the Workspace Manager Installer MSI for this option.

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@hooverpaul55?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Teysen</a> on <a href="https://unsplash.com/photos/white-and-gray-metal-tower-ewxjw7Gp77Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;