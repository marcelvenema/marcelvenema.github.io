---
title: "Use -noprofile parameter"
description: ""
date: 2015-10-29T09:00:00+01:00
lastmod: 2015-10-29T09:00:00+01:00
image_cover: "ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

When using a Powershell script in a scheduled task, external command, shortcut or script, always use the –noprofile commandline parameter to start the PowerShell script.

<!--more-->

{{< image src="ilya-pavlov-OqtafYT5kTw-unsplash.jpg" alt="Powershell -noprofile parameter" >}}

A typical commandline looks like this:<br/>

`powershell.exe –executionpolicy bypass –noprofile –windowstyle hidden –file <filename>.ps1`

Without the noprofile parameter, PowerShell loads, if present, all the profile scripts before executing the script. This will take some time before the actual script is processed and it can also be very dangerous because you do not know what is inside the profile scripts.

A PowerShell profile script is like an autoexec.bat for the PowerShell console, it is processed every time when PowerShell is started. You can use the script to customize the PowerShell environment like loading libraries, changing background colors, checking the weather etc. The variable $profile will list all the configured profile scripts.

Happy scripting!

&nbsp;

---
&nbsp;

 Photo by <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ilya Pavlov</a> on <a href="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
