---
title: "Lab upgrade to Windows Server 2019"
description: ""
date: 2018-12-28T09:00:00+01:00
lastmod: 2018-12-28T09:00:00+01:00
image_cover: "20180926_075601730_iOS.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
------

Recently I upgraded my Hyper-V homelab server to Windows Server 2019 Datacenter. Note to self: Have Intel network drivers nearby.

<!--more-->
{{< image src="20180926_075601730_iOS.jpg" alt="" >}}

I have three servers in my homelab, one SuperMicro server and two MSI workstation motherboards acting as servers. They are all build into an Ikea Besta cabinet, see one of my blog post of last year. Depending my current project, the MSI workstations are running VMWare vShpere, Citrix XenServer, Nutanix AHV or Microsoft Hyper-V. 

At this moment the server is running Microsoft Server 2016 Datacenter and I wanted to upgrade to the 2019 edition. The MSI Workstation is a MSI X99A Raider motherboard with Intel i7-5820 processor and 96GB memory. It has an onboard Intel i218LM network adapter and a separate Intel X710 10GB network card.

The upgrade went very smooth: Mount ISO, run setup.exe and after a few minutes the system was ready installing and rebooted. The server is build into a cabinet and no computer monitor, keyboard and mouse are attached. After 15 minutes I tried to remote connect to the server, nothing happens....

It turned out that the Intel I218LM network driver was not migrated. In Windows Device Manager, the network adapter was not recognized. I tried to search for the driver on the machine but had no luck. The key is to add the drivers again with the 'Have disk' option. 

Download the I218LM drivers from the Intel website and extract the PROWinx64.exe file. Go to Device Manager, select the missing Ethernet Controller. Update driver and select 'Browse my computer for driver software'. The fun part is that when you select 'Search for drivers' no drivers are found, you must select them manually by choosing 'Let me pick from a list...'. Select network adapter, click the 'Have disk' button and browse to the ProWinx64/PRO1000/Winx64/NDIS64 folder. Select the I218LM network card. Ignore the warning, after installation the network adapter works again.

{{< image src="i218.jpg" alt="" >}}

&nbsp;
