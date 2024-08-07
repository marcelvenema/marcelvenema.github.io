---
title: "Homelab update"
description: ""
date: 2014-08-02T09:00:00+01:00
lastmod: 2014-08-02T09:00:00+01:00
image_cover: "alexandre-debieve-FO7JIlwjOtU-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: ["homelab"]
draft: false
---

I wanted to replace my old ESXi homelab server. Not only it is aging, it has an antique Intel quadcore Q6600 processor, but I also get more frequently the famous purple screens.

Possible cause of these screens are probably the Realtek network adapters as these adapters are not officially supported. Besides this ESXi server I have also a Hyper-V and a XenServer homelab server, more about these in another blogpost.
 
**Processor**
My requirements for the processor are as much cores I can afford. The Intel Xeon E5 CPU with 12 cores is high on my wish list but with a retail price of USD 2.700, - a little out of budget. So I settle for a mainstream Intel i7-4790 Haswell processor with four cores. With a retail price of USD 312, - much more affordable and I am not hosting 400 users on 11 VM’s, so this processor is sufficient for me. The i7-4790 is a 22nm processor is the latest generation and supports all important virtualization technologies. Intel VT-d technology for redirecting I/O is also supported, so I can use this processor in the future to power an XBMC virtual machine with GPU pass-through. Use the Intel ARK website to lookup functionality of a specific processor.
 
**Motherboard**
In the past I had some issues of selecting motherboards with no BIOS support for virtualization technologies. So I need to double check this now when selecting a new board. I also want the newest x97 Intel chipset. My other home lab servers have a MSI motherboard and I am happy about the brand. Important for me are SATA600 support, 1GB network speed and enough PCI-e expansion slots for extra network cards. Most mainboard manufactures have these specifications nowadays. I choose the MSI Z97-G43 motherboard, based on price and availability.
 
**Memory**
The motherboard supports 32GB of memory. With all planned VM’s I need as much memory that I can get. I settle for four 8GB RAM modules.
 
**Storage**
This homelab server will be a VMWare ESXi server. I will use a 16GB USB 3.0 stick to install the hypervisor as this is the best practice. To improve performance I use a 120GB SSD harddisk for caching For local storage of the VM’s I have a Western Digital Red 2TB SATA600 harddisk. Besides the local storage I can also use iSCSI to connect to my Synology NAS.
 
**Network Card**
In the past I had (and have) issues with the Realtek network cards on ESXi . From time to time my current ESXi server has purple screens and needs to be rebooted to function properly. VMWare also removed all Realtek support from the installation ISO of ESXi. For my new server I choose Intel network cards. I disabled the on-board Realtek network controller. The server will be equipped with four Intel network cards. I use four different networks: one for management, a home network, a demo network and a DMZ network.
 
**Power**
All components are powered by a 380 Watt Antec Earthwatts Green power supply. I choose this PSU because it has an efficiency of over 80%. Also, this PSU was preferred choice of the Dutch tweakers.net tech website.

&nbsp;  
&nbsp;  

---

Photo by <a href="https://unsplash.com/@alexkixa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexandre Debiève</a> on <a href="https://unsplash.com/photos/macro-photography-of-black-circuit-board-FO7JIlwjOtU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;  
  