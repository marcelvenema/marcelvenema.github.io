---
title: "Nutanix Community Edition 2.1"
description: ""
date: 2024-10-02T06:00:00+01:00
lastmod: 2024-10-02T06:00:00+01:00
image_cover: "hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
categories: ["Nutanix"]
authors: ["Marcel Venema"] 
tags: ["AHV"]
draft: false
---

New hardware for my Nutanix CE homelab means a new installation of Nutanix Community Edition! Nutanix released a new version about a month ago with lot's of new features and enhancements. 
<!--more-->

{{< image src="hannah-busing-Zyx1bK9mqmA-unsplash.jpg" alt="" >}}

The biggest improvement is that Nutanix CE is now based on the latest AOS, 6.8.1, and will follow the normal lifecycle updates of AOS and AHV from the commercial versions. You don't have to wait ages for a specific Nutanix CE version anymore. :-)
It is compatible with the commercial version of Prism Central, allowing users to try out all great other features and acces the PrismCentral API for automation.<br/>
Drawbacks are no ESXi support anymore and no automatic cluster creation after installation, meaning you have to install it manually with the commandline after initial installation.
<br/>

## Nutanix CE installation
Create a bootable USB from the Nutanix CE 2.1 ISO file, boot, and wait until the installer screen appears. Select the disk for the AHV hypervisor (H), the CVM disk (C) and the disk to store the data (D) 
 and  


## Cluster configuration

After installation of Nutanix CE, reboot the server and login to the CVM with <kbd>nutanix</kbd> and password <kbd>nutanix/4u</kbd>. Do not forget to change this default password with the `passwd` command. Create the cluster with the command: `cluster -s <ip address of CVMs> --redundancy_factor=1 --dns_servers <ip adress of DNS servers> create`

When the cluster is created, the PrismElement web management console should be accessible via `https://<CVM ip address>:9440`.<br/>
Login to the management console with user <kbd>admin</kbd> and password <kbd>nutanix/4u</kbd>, change the password and login again. After login provide your Nutanix NEXT credentials to start using Nutanix CE.  account and crer 






>
ymanually before you can use some manual 

test latest version of 

LCM the commercial version 



&nbsp;  

---
&nbsp;

Photo by <a href="https://unsplash.com/@hannahbusing?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hannah Busing</a> on <a href="https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  