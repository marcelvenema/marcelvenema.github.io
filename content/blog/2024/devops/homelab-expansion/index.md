---
title: "Homelab expansion"
description: ""
date: 2024-09-28T06:00:00+01:00
lastmod: 2024-09-28T06:00:00+01:00
image_cover: "minisforum01.jpg"
categories: ["DevOps"]
authors: ["Marcel Venema"]
tags: [""]
draft: false
---

My Nutanix homelab server died... Of course this always happens at the worst possible time. Luckily I found a literally fast replacement in the shape of the Minisforum MS-01 workstation...

<!--more-->

{{< image src="minisforum01.jpg" alt="" >}}

I was working on an Ansible playbook to install Cisco CallManager on Nutanix AHV when suddenly my Nutanix Community Edition server stopped, along with my workstation, monitors, printer, ceiling lights and airconditioning... A fuse blew and the homelab server was totally dead. I tried to repair it, no luck and quickly realized this was a sign to buy new hardware...

Luckily I did my homework and read a lot of forums, blog articles and other technical stuff to keep up with all the information an IT professional need to know. A while ago I was reading a review of the Minisforum MS-01 workstation on the [servethehome](https://www.servethehome.com/minisforum-ms-01-review-the-10gbe-with-pcie-slot-mini-pc-intel/) website. This workstation caught my eye, because the workstation has a small form factor and not one, but two 10G NICs onboard. I already have a small 10G network and if my new homelab server can connect to this it would be a huge bonus.

The Minisforum MS-01 comes equipped with the Intel Core i9-13900H, featuring 14 cores (6 performance, 8 efficiency) and up to 20 threads, making it ideal for workloads that require substantial processing power. Running it with a server operating system causes losing the efficiency cores, but adds hyperthreading. It is still more than my old homelab Intel i5-8400 DIY build. The workstation officially supports 64GB memory, but various blogs show running a total memory configuration of 96GB RAM.

The configuration is an Intel i9-13900H processor, 96GB RAM and two NVMe 2TB disks. There is plenty of connectivity with two 10Gbe SFP+ ports, two 2.5GBe RJ45 ports and two USB4 Thunderbolt ports. There is also space for a PCI expansion card or GPU. I have some concerns about the cooling capacity when the computer is fully stacked, but let's find out!   
 
{{< image src="minisforum02.jpg" alt="" >}}


Next step is installing Nutanix Community Edition....


I paid for the configuration myself, but I love to 'test' another workstation from the manufacturer to see how this behaves in a cluster configuration... :-)  


&nbsp;

---
&nbsp;