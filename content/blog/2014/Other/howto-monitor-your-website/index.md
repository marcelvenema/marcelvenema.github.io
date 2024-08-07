---
title: "How to monitor your website"
description: ""
date: 2014-02-21T09:00:00+01:00
lastmod: 2014-02-21T09:00:00+01:00
image_cover: "ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: ["homelab"]
draft: false
---

I am hosting marcelvenema.com at my own home. I am using a virtual machine on my research and development infrastructure. 

This ‘infrastructure’ is a big word for 2 servers running an Intel i5 processor with 32GB RAM each, a server with a i7 processor and 32GB RAM and a small HTPC. All are connected to two Synology NAS systems. The home-build servers are all running a different hypervisor, Citrix XenServer, VMWare ESXi and Microsoft Hyper-V. Just because it is research and development, the change that something will break is more than average.

For that reason I monitor my websites with a free webservice: [montastic.com](https://montastic.com/). It monitors every 30 minutes if it can reach my websites. If not, I will receive an e-mail. And the best part, it is free. Do you have other cool tools ? Better suggestions ? Leave a reply in the comments.

&nbsp;  
&nbsp;  

---

 Photo by <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ilya Pavlov</a> on <a href="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;  
