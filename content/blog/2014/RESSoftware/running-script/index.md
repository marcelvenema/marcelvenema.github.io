---
title: "Running a script when a user reconnects, disconnects, locks, unlocks and roams..."
description: ""
date: 2014-08-14T09:00:00+01:00
lastmod: 2014-08-14T09:00:00+01:00
image_cover: "ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: ["RESWM"]
draft: false
---

If you don’t have third party tools like RES Workspace Manager, AppSense Environment Manager or Immidio Flex+ there is no easy way to run a script on a reconnect, lock or other event.

<!--more-->

{{< image src="ilya-pavlov-OqtafYT5kTw-unsplash.jpg" alt="How to monitor your website" >}}

SessionManager is a small freeware tool to run commands when a specific Windows session event occurs.

SessionManager can be started from a command prompt, but will typically be used from a logon script, group policy, etcetera. SessionManager should be started when a user starts a session.

SessionManager uses a XML file to store the configuration. You can change the XML file to start a specific action. Supported file-types are .PS1, .VBS, .CMD and .EXE. The tool also sets a CURRENT_CLIENTNAME and CURRENT_CLIENTIP variabele.

Download SessionManager at the Tools section. Please feel free to send me an e-mail for enhancements, bugreports or other questions.

&nbsp;

---
&nbsp;

 Photo by <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ilya Pavlov</a> on <a href="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
