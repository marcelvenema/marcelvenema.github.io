---
title: "Homelab expansion"
description: ""
date: 2024-09-28T06:00:00+01:00
lastmod: 2024-09-28T06:00:00+01:00
image_cover: "image-placeholder.png"
categories: ["DevOps"]
authors: ["Marcel Venema"]
tags: [""]
draft: true
---

My Nutanix homelab server died... Of course this always happens at the worst possible time. Luckily I found a literally fast replacement in the shape of the Minisforum MS-01 workstation...

<!--more-->

I was working on an Ansible playbook to install Cisco CallManager on Nutanix AHV when suddenly my Nutanix Community Edition server stopped, along with my workstation, monitors, printer, ceiling lights and airconditioning... A fuse blow and the homelab server was totally dead. Luckily I do my homework and read a lot of forums, blog articles and other technical stuff to keep up with all the information an IT professional need to know. A while ago i was reading a review of the Minisforum MS-01 workstation on the [servethehome](https://www.servethehome.com/minisforum-ms-01-review-the-10gbe-with-pcie-slot-mini-pc-intel/) website. The workstation caught my eye, because the workstation has a small form factor and not one, but two 10G NICs onboard. I already have a small 10G network and if my new homelab server can connect to this it would be a huge bonus.

The Minisforum MS-01 comes equipped with the Intel Core i9-13900H, featuring 14 cores (6 performance, 8 efficiency) and up to 20 threads, making it ideal for workloads that require substantial processing power. Running it with a server operating system causes losing the efficiency cores, but it adds hyperthreading. It is still more than my old homelab Intel i5-8400 DIY build. The workstation officially supports 64GB memory, but various blogs shows running a total memory configuration of 96GB RAM.






d i3 -hreding, but it enabling hyperthreading, but, as a server loses The processor is supported by DDR5 RAM, which provides the necessary bandwidth for handling demanding virtualization tasks. The device also includes PCIe 4.0 and PCIe 5.0 slots, offering excellent expandability for future upgrades.

