---
title: "Deployment Toolkit WinPE: Tips & Tricks"
description: ""
date: 2014-11-24T09:00:00+01:00
lastmod: 2014-11-24T09:00:00+01:00
image_cover: "tadas-sar-T01GZhBSyMQ-unsplash.jpg"
categories: ["Deployment"]
authors: ["Marcel Venema"] 
tags: ["MDT"]
draft: false
---

Last week I was working on a Microsoft Deployment Toolkit project. The customer wants to deploy several Virtual Machines and wants a mechanism for creating a golden image for their XenApp/PVS environment. And yes, I know that RES Automation Manager is a fast, simple and powerful tool to create runbooks, but unfortunately I could not convince the architects to use it. The customer wants to use MDT as a step-up to SCCM in another project later this year. So MDT it is…

<!--more-->

{{< image src="tadas-sar-T01GZhBSyMQ-unsplash.jpg" alt="" >}}

The customer uses VMWare vSphere as a hypervisor for their virtual machines.

The infrastructure team is using the VMXNET3 network interface. MDT uses the Windows PE environment for deployment. WinPE supports out-of-the box the E1000 network interface, but not the VMXNET3 interface. You need to add the driver to the WinPE environment.

This can be easily done with the MDT Deployment Workbench and selecting ‘Deployment Share – Out-of-box drivers – Import drivers’ but to find the driver is a little bit tricky. You can use the VMXNET3 driver from the VMWare Tools installation package. To use the driver you need to do an administrative install to extract the driver.

Another issue I have found was the PVSCI driver. The infrastructure team is using a paravirtual SCSI controller instead of the LSI Logic SAS controller. The VMWare paravirtual driver is also not included in WinPE. This one is a little bit tricky, you cannot use the PVSCSI driver from the VMWare tools. This will not work. 

You have to use the PVSCI text mode setup driver which is included in the pvscsi_Windows2008.flp file from the VMWare Workstation Resources folder. So add a virtual floppy drive to the VM, mount the .FLP file and extract the drivers from the drive. Import the driver to the Out-of-box-drivers section in the Deployment Workbench.

&nbsp;  
 
---
&nbsp; 

Photo by <a href="https://unsplash.com/@stadsa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tadas Sar</a> on <a href="https://unsplash.com/photos/black-laptop-computer-keyboard-in-closeup-photo-T01GZhBSyMQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;  
  