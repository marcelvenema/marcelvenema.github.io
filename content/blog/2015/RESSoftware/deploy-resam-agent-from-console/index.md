---
title: "Deploy RESOne Automation Agent from Management Console"
description: "Deploy RES Automation Agent from console"
date: 2015-09-12T09:00:00+01:00
lastmod: 2015-09-12T09:00:00+01:00
image_cover: "linkedin-sales-solutions-0QvTyp0gH3A-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

Deploying RESONE Automation agents from the Management Console can sometimes be hard, especially on new workstations with the Windows 8/2012 and newer operating systems security measures in place. 

<!--more-->

{{< image src="linkedin-sales-solutions-0QvTyp0gH3A-unsplash.jpg" alt="Arcadie for ipad mini" >}}

In order to successfully deploy an agent to a workstation, follow these steps:


## Disable firewall on workstation

When deploying an agent to a workstation, the console tries to create an IPC$ connection to the workstation, push the installation files and tries to install the agent. When the firewall is turned on, these ports are blocked. Before installation, please disable the firewall. As a best practice, disable the firewall, deploy the agent and use a RESONE Automation task to enable the firewall again.

You can disable the firewall with the (elevated) command: netsh advfirewall set allprofiles state off.
Be sure port 3163 on Dispatcher is open.

The RESONE Automation agent communicates directly with the Dispatcher on port 3163. Be sure this port is not blocked by the firewall on the Dispatcher itself. When installing the agent, a firewall rule on the workstation is automatically added.


## Disable User Account Control (UAC)

UAC prevents the RESONE Automation deployment processes to start the installation file. You cannot disable UAC completely with the GUI, you can only slide it to a minimal level. To completely disabling UAC requires a bit work: You must set two registry keys and reboot the workstation.


`reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 0 /f`<br/>

`reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v ConsentPromptBehaviorAdmin /t REG_DWORD /d 0 /f`<br/>


## Deploy agent from console

When deploying an agent from the RESONE Automation Management Console, be sure to enter the correct security context of the workstation.

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@linkedinsalesnavigator?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">LinkedIn Sales Solutions</a> on <a href="https://unsplash.com/photos/person-typing-on-macbook-pro-on-brown-wooden-table-during-daytime-photo-0QvTyp0gH3A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;
