---
title: "Homelab: Install Nutanix CE cluster - Hardware"
description: ""
date: 2020-11-11T09:00:00+01:00
lastmod: 2020-11-11T09:00:00+01:00
image_cover: "20201126_173520979_iOS.jpg"
categories: ["Speedster"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

In this blog post series, I will show you how to install a three-node Nutanix CE cluster to host my home lab.

<!--more-->
{{< image src="20201126_173520979_iOS.jpg" alt="" >}}

I was always inspired by the vision of Nutanix of 'one platform, any app, any location' and participated in some VDI projects using Nutanix hardware, but never got the time to build an own home lab. Nowadays, in 2020, everybody is working from home and working more and more with Nutanix projects, it is time to use it in my home lab.


**Hardware**
There are some attention points to select the proper hardware:

First, it is my home lab and I am on a budget, so I cannot use enterprise-class hardware like Nutanix, Cisco UCS, HP Enterprise, Dell, or any other enterprise brand. Luckily Nutanix CE is working with a lot of OEM components. For me, the cheapest way is to build the servers myself.

Second, every Nutanix host requires at least three disks: one for the hypervisor, one SSD disk for a control VM (CVM), and one or more disks to store data. I ended up with a 1TB SSD disk and 5TB HDD disk to store data. With a 3-node cluster, I have effectively  1+5 = approx. 6TB room for my virtual machines and data.


Third, the control VM in every host needs at least 20Gb memory, adding this up with a few running VM's and a working minimum memory requirement is 64GB. Most consumer motherboards accept a maximum of 64GB, otherwise, you need to buy expensive server mainboards. I am on a budget, so the maximum memory will be 64GB.


I ended up with the following configuration: 

ASRock DeskMini 310 barebone
Intel i5-8400 hexacore processor
2 x 32GB SO-DIMM RAM memory 
8GB USB stick for AHV hypervisor
1TB Crucial M.2 SSD for CVM storage
1TB Crucial SATA SSD disk for data storage
5TB Seagate SATA HDD disk for data storage 

{{< image src="20201212_085308859_iOS.jpg" alt="" >}}
&nbsp;

My first challenge was the size of the HDD disk. The 5TB disk was much larger than expected, and it does not fit into the case. The 1TB disk fits perfectly, and after removing some support brackets on the case with my Dremel, the 5TB disk also fits, more or less...

After connecting the cables it is time to install the software. More in the next blog...

{{< image src="20201203_074738704_iOS.jpg" alt="" >}}

&nbsp;
