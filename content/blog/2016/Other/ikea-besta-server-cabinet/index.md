---
title: "Buildingan Ikea Besta server cabinet"
description: ""
date: 2016-03-29T09:00:00+01:00
lastmod: 2016-03-29T09:00:00+01:00
image_cover: "20180926_075601730_iOS.jpg"
categories: ["Homelab"]
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---


Recently I renovated and refurbished my study room. That also was a great moment to renovate my computer home lab.

<!--more-->
{{< image src="20180926_075601730_iOS.jpg" alt="" >}}

I have four servers, one server running VMWare ESXi, one Citrix XenServer and two servers running Microsoft Hyper-V. About eight years ago I bought four computer cases from ThermalTake, the Tsunami Dream series. Pretty nice stuff, but for my new study room I wanted something special. Reading a lot about other IKEA projects like the Helmer unix cluster and the Besta HTPC, I decided to create a server cabinet for my four homelab servers.

```
Material list:
1 x Ikea Besta frame white H64cm-W60cm-D40cm
3 x Ikea Besta shelf white, H02cm-W59cm-D36CM
1 x MSI Z87-G43 mainboard, Intel i7-4790 CPU, 32GB RAM, Samsung Evo850 256GB SSD, 2 x Intel Pro NIC
1 x MSI Z87-G43 mainboard, Intel i7-4790 CPU, 32GB RAM, Samsung Evo850 256GB SSD, 2 x Intel Pro NIC
1 x MSI Z87-G43 mainboard, Intel i7-4790 CPU, 32GB RAM, Samsung Evo850 256GB SSD, 2 x Intel Pro NIC
1 x MSI X99 mainboard, Intel i7-5820 CPU, 64GB RAM, Samsung Evo850 SSD, 2 x Intel Pro NIC
4 x Antec 380W Green power supply
1 x 24 port keystone rack with 4 x HDMI, 4 x USB and 16 x RJ45.
Several Nuts and bolts, M3x40mm
```

The frame will be divided in four sections; the bottom section will house the four power adapters. On top of the power adapters I will reserve some room for the network cables and patch panel. The two top parts will house the four servers. Airflow will be very important. I expect the airflow will go from the back of the frame to the front. In the future I will mount a dust filter on the back with additional fans. At this moment I expect the cooling will be sufficient.

The power adapters are all around 380watt and 80% efficiency. The EPS connectors for the servers on the top shelf are not long enough, this is solved with an EPS extension cable.

I also need to replace the standard Intel processor cooler by a right-angled cooler so the airflow will be correct. The total height is important, as it must fit on the shelf of the IKEA Besta case. The height of the coolers must not exceed 140mm. I ordered and paid four Artic Freezer i11 CPU coolers for next day delivery. The next day, no delivery, the product was out of stock with a new delivery date in 8 business days. Bummer… Luckily my local computer store around the corner had two Artic Cooling Freezer 7 on stock.

A glass panel will be mounted in the future at the front of the frame to view the servers. The glass panel will be a few centimeters open to provide enough airflow. In the gallery I will post some pictures.
