---
title: "Setup VM's for training"
description: ""
date: 2018-12-01T09:00:00+01:00
lastmod: 2018-12-01T09:00:00+01:00
image_cover: "feliphe-schiarolli-hes6nUC1MVc-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Besides my work as an architect and consultant, I sometimes deliver various Citrix, Microsoft and Ivanti training classes. In this blog post I will explain how to set up virtual machines for a training environment. 

<!--more-->
{{< image src="feliphe-schiarolli-hes6nUC1MVc-unsplash.jpg" alt="" >}}

When delivering a training, mostly I can choose between virtual machines in the cloud or  virtual machines on the student workstation. I prefer the last one, no worries about poor performance or bad internet connections. After the training, the student can take the files with him and practice at work or home. Depending the type of class, students use up to six virtual machines simultaneously. 


**Student Workstation**

For running virtual machines, I prefer a laptop or workstation with Intel CPU, i5 or higher  with enough memory and free disk space. SSD harddisk is recommended. 2-4 GB memory and 20-60GB free disk space per virtual machine are required. 

Look at the 'Tech Specs' of VMWare Workstation Pro which hardware and host operating system is supported.


**VMWare Workstation Pro**

For most of my virtual machines, I use VMWare Workstation as a hypervisor for the virtual machines. You can download an evaluation version here. You can try the software 30 days for free. 


**Microsoft Windows 10 Enterprise / Windows Server 2019**

Use the Microsoft Evaluation Center to download ISO files for installation of the operating system on the VM.  Register your name and e-mail on the site and download the ISO files. I prefer to use the English language and 64bit platform for the operating systems.


**VM Templates**

I have created a few VMWare Workstation VM templates. Download them below, unzip it and open it with VMWare Workstation to attach the appropriate ISO file to it.

Training folder structure
Windows Server 2019
Windows 10 Enterprise 64bit

**OS Installation**

The installation of the operating system is very easy. One the ISO file is attached, power up the VM and installation will start. Use default values for installation. When using Windows Server 2019, please be sure to select the 'Desktop Experience' option. Last tip, remember the password you entered!


**Windows Server 2019**

{{< image src="W10-01.png" alt="" >}}


**Ready!**

Once the operating system installation is finished, you are ready! For a better user experience you may log on to the VM and install the VMWare Tools. 


In a future blog post I will explain how to setup the training environment with a SQL Server,  Active Directory Domain Controller, users, groups and predefined policies. Happy training!

&nbsp;
