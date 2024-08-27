---
title: "MDT Reference Image Factory"
description: ""
date: 2018-03-01T09:00:00+01:00
lastmod: 2018-03-01T09:00:00+01:00
image_cover: "jandira-sonnendeck-AcW1ZwD-qC0-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Part 1 of 6: **Install and configure Microsoft Deployment Toolkit** 
Automated process of building up-to-date .WIM images to use for deployment of servers and workstations.

<!--more-->
{{< image src="jandira-sonnendeck-AcW1ZwD-qC0-unsplash.jpg" alt="" >}}

In this post I will explain how to install and configure the Microsoft Deployment Toolkit to use it to automatically create an up-to-date .WIM image to use it for deployment of servers and workstations. Installing updates on a Windows server or workstation can take a considerable amount of time, especially when using the original .ISO image. The Reference Image Factory will automatically create every two weeks an updated .WIM image with the latest updates and patches, which can be used for deployment.

Step-by-step:

- Install Windows Assesment and Deployment Kit (ADK)

- Install Microsoft Deployment Toolkit

- Create service account

- Create Reference Share

- Import Operating systems

- Create MDT Reference Image TaskSequence

- Configure TaskSequence and reference share

- Add optional applications to Reference Image

- Remove ‘Press any key…’ from WinPE boot CD

- Create Windows Reference Images

- Copy Reference Images to an MDT Deployment share 



**Install ADK and MDT**:
First step is installing the Windows ADK and the Microsoft Deployment Toolkit. Be sure to use the latest version of ADK and MDT, otherwise some compatibility issues may occur. I have provided an Ivanti Automation buildingblock here, download ADK here and MDT here, add the files as an Automation resource, import the building block and point to the created resource. 


**Create service account**:
Next step is creating a service account. A Reference Image is created by starting an empty VM, boot from a Windows PE disk, install the operating system, install optional applications, update the OS and capture a WIM file. To connect from the Windows PE disk to the MDT Deployment Share a service account is needed. I create a local user service account named SA_MDT the deployment server. The password is Password1. In the Automation module the service account name and password can be changed at execution.

**Create Reference Share**:
MDT needs a deployment share to store the configuration, source files and logic to deploy the OS. The Automation module will create the folder on drive D:\, share the folder and set the appropriate permissions. The MDT module also creates the folder structure and initializes MDT. Also on this module, all parameters can be changed at execution. Be sure to use the same local user service account name used in the module before.

**Import Operating Systems**:
The last step is to import the operating systems. This can be automated, Automation runbooks are available on request, but it is much easier to manually import the operating system ISO into MDT. Open the Deployment Workbench and select Operating Systems. Create a clear folder structure, like the example below and import the OS.

{{< image src="MDT01.jpg" alt="" >}}

**Next steps**:

At this point we have installed the Microsoft Deployment Toolkit, configured the Deployment Share and imported one ore more operating systems. In the next blog I will explain how to configure MDT and create the Reference Image task sequence.
 
Automation Buildingblocks:

Install Microsoft ADK
Install Microsoft Deployment Toolkit

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@jandira_sonnendeck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jandira Sonnendeck</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-disc-with-a-toothbrush-on-top-of-it-AcW1ZwD-qC0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
