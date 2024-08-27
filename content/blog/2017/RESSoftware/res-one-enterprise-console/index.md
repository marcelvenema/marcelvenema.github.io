---
title: "RES ONE "
description: ""
date: 2017-03-25T09:00:00+01:00
lastmod: 2017-03-25T09:00:00+01:00
image_cover: "roe.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Besides the three standard management consoles of RES ONE Workspace, RES ONE Automation and RES ONE Identity Director there is a fourth console: The RES ONE Enterprise Console. Actually, in total there are 7 RES ONE management consoles.

<!--more-->
{{< image src="roe.jpg" alt="" >}}

Not only the three application management consoles, but also the web versions of it. RES Software is in the process of slowly moving functionality from the application based management consoles to a web version, just like the RES ONE Identity Director web console today. My personal expectation is that in about 2 or 3 releases all functionality will be moved to a web console. 


The 'old' application management consoles will still exists, although I can imagine only new functionality will be available in the web console. Be warned, these are my own expectations and I have no confirmation from RES Software, as software manufacturers never confirm timelines of new software.


A hidden gem is the RES ONE Enterprise Console, basically it is a wrapper of all management consoles of the three products. It is included in the big 600MB+ installation file of the RES ONE Enterprise Installer exe or zip file, which can be downloaded from the RES Success Center (login required). When you run the installer and select ‘Extract all components’, the individual setup files will be extracted and placed into a folder. Use the ‘RES ONE Enterprise.exe file to install the console.


For unattended installation, use the commandline parameter `"res one enterprise.exe" /exelog %TEMP%\install_res_enterprise_console.log /qb` commandline parameters. Installation requires elevated privileges, be sure to disable UAC first.

&nbsp;