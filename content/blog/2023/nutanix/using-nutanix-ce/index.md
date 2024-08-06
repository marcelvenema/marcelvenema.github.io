---
title: "Lab: Using Nutanix CE"
description: ""
date: 2023-04-28T09:00:00+01:00
image_cover: "/img/blog/2023/using-nutanix-ce.jpg"
categories: ["Nutanix"]
authors: ["Marcel Venema"] 
tags: ["homelab"]
draft: false
---

Nutanix CE (Community Edition) is a free, community-supported version of Nutanix's enterprise cloud platform. 

<!--more-->

Here are some reasons why you should consider using Nutanix CE:

**Easy to Install and Use**: Nutanix CE is easy to install and use, even for those with limited experience in setting up a hyperconverged infrastructure. The platform comes with a simple installer that guides you through the setup process, and the intuitive web-based user interface makes it easy to manage your infrastructure.


**Cost-effective**: Nutanix CE is a cost-effective solution for building your own hyperconverged infrastructure. It's a great option for small businesses or home labs looking to experiment with hyperconverged infrastructure without the expense of an enterprise solution.


**Enterprise-grade Features**: Nutanix CE provides many of the same enterprise-grade features found in Nutanix's commercial products, such as data compression, deduplication, erasure coding, and storage tiering. This means you can experience the same benefits of a fully-featured hyperconverged infrastructure without the associated costs.


**Scalability**: Nutanix CE is highly scalable and can be used to build small or large-scale hyperconverged infrastructures. The platform supports the addition of nodes, storage, and networking as your needs grow, making it a flexible and scalable solution.


**Community Support**: Nutanix CE is a community-supported product, which means you have access to a community of Nutanix users who can help you troubleshoot any issues or answer your questions. The Nutanix community is active and supportive, providing a valuable resource for anyone looking to learn more about hyperconverged infrastructure.

There is one downside to Nutanix CE: Due to the hyperconverged architecture, it needs one control virtual machine per physical host, absorbing a minimum of 20GB host memory. 


##Installation
To install Nutanix CE (Community Edition), follow these steps:

Verify hardware compatibility: Nutanix CE has specific hardware requirements, so ensure that your hardware is compatible. You can check the hardware compatibility list on Nutanix's website.

Download the Nutanix CE ISO: You can download the Nutanix CE ISO from Nutanix's website. Ensure that you select the correct version for your hardware. You need a free Nutanix account to download Nutanix CE.

Create a bootable USB drive: Once you have downloaded the Nutanix CE ISO, create a bootable USB drive using a tool like Rufus or Etcher.

Boot the server from the USB drive: Insert the bootable USB drive into the server and boot from it. Follow the on-screen instructions to start the installation process.

Configure network settings: During the installation process, you will be prompted to configure the network settings of the AHV hypervisor and Prism Elements CVM. Ensure that you configure the network settings correctly to ensure that Nutanix CE is accessible on your network.

Complete the installation: Once you have configured the network settings, follow the on-screen instructions to complete the installation process. This may take some time depending on your hardware.

Access Nutanix CE: Once the installation is complete, you can access Nutanix CE using the web-based console. You can log in using the default username and password, which is "admin" and "nutanix/4u" respectively. When accessing the console on a chromium-based browser via IP address/hostname and not using the full FQDN address, you get a certificate warning. Please type 'thisisunsafe' in the browser window to proceed to the login screen. To resolve this, configure a trusted certificate in the Nutanix Prism configuration and access the console via the FQDN address of the certificate.


Note: It's recommended to follow the official Nutanix CE installation guide to ensure that you complete the installation process correctly.

&nbsp;
