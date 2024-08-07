---
title: "Lab: Using Nutanix CE copy 2"
description: "Nutanix CE (Community Edition) is a free, community-supported version of Nutanix's enterprise cloud platform. Here are some reasons why you should consider using Nutanix CE:Easy to Install and Use: Nutanix CE is easy to install and use, even for those with limited experience in setting up a hyperconverged infrastructure. The platform comes with a simple installer that guides you through the setup process, and the intuitive web-based user interface makes it easy to manage your infrastructure.Cost"
date: 2021-04-29T06:00:00+00:00
lastmod: 2021-04-29T00:40:04+00:00
authors: ["Marcel Venema"]
categories:
  - Nutanix
  - Home lab
  - RES Software / Ivanti
  - 356 Speedster
  - Personal
  - Deployment
  - PowerShell
  - Repository
  - DevOps
  - ModelX
  - Synology
  - Vault
image_cover: "lab-using-nutanix-ce-1.jpg"
gallery_images:
  - "lab-using-nutanix-ce-1.jpg"
  - "lab-using-nutanix-ce-2.jpg"
draft: false
---

Nutanix CE (Community Edition) is a free, community-supported version of Nutanix's enterprise cloud platform.

{{< img index="0" alt="photo 0" >}}

Here are some reasons why you should consider using Nutanix CE:

**Easy to Install and Use**: Nutanix CE is easy to install and use, even for those with limited experience in setting up a hyperconverged infrastructure. The platform comes with a simple installer that guides you through the setup process, and the intuitive web-based user interface makes it easy to manage your infrastructure.

**Cost-effective**: Nutanix CE is a cost-effective solution for building your own hyperconverged infrastructure. It's a great option for small businesses or home labs looking to experiment with hyperconverged infrastructure without the expense of an enterprise solution.

**Enterprise-grade Features**: Nutanix CE provides many of the same enterprise-grade features found in Nutanix's commercial products, such as data compression, deduplication, erasure coding, and storage tiering. This means you can experience the same benefits of a fully-featured hyperconverged infrastructure without the associated costs.

**Scalability**: Nutanix CE is highly scalable and can be used to build small or large-scale hyperconverged infrastructures. The platform supports the addition of nodes, storage, and networking as your needs grow, making it a flexible and scalable solution.

**Community Support**: Nutanix CE is a community-supported product, which means you have access to a community of Nutanix users who can help you troubleshoot any issues or answer your questions. The Nutanix community is active and supportive, providing a valuable resource for anyone looking to learn more about hyperconverged infrastructure.

There is one downside to Nutanix CE: Due to the hyperconverged architecture, it needs one control virtual machine per physical host, absorbing a minimum of 20GB host memory.

## Installation

To install Nutanix CE (Community Edition), follow these steps:

1. Verify hardware compatibility: Nutanix CE has specific hardware requirements, so ensure that your hardware is compatible. You can check the hardware compatibility list on Nutanix's [website](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Community-Edition-Getting-Started).
2. Download the Nutanix CE ISO: You can [download](https://next.nutanix.com/discussion-forum-14/download-community-edition-38417) the Nutanix CE ISO from Nutanix's website. Ensure that you select the correct version for your hardware. You need a free Nutanix account to download Nutanix CE.
3. Create a bootable USB drive: Once you have downloaded the Nutanix CE ISO, create a bootable USB drive using a tool like [Rufus](https://rufus.ie) or [Etcher](https://www.balena.io/etcher).
4. Boot the server from the USB drive: Insert the bootable USB drive into the server and boot from it. Follow the on-screen instructions to start the installation process.
5. Configure network settings: During the installation process, you will be prompted to configure the network settings of the AHV hypervisor and Prism Elements CVM. Ensure that you configure the network settings correctly to ensure that Nutanix CE is accessible on your network.
6. Complete the installation: Once you have configured the network settings, follow the on-screen instructions to complete the installation process. This may take some time depending on your hardware.
7. Access Nutanix CE: Once the installation is complete, you can access Nutanix CE using the web-based console. You can log in using the default username and password, which is "admin" and "nutanix/4u" respectively. When accessing the console on a chromium-based browser via IP address/hostname and not using the full FQDN address, you get a certificate warning. Please type 'thisisunsafe' in the browser window to proceed to the login screen. To resolve this, configure a trusted certificate in the Nutanix Prism configuration and access the console via the FQDN address of the certificate.

Note: It's recommended to follow the official Nutanix CE installation guide to ensure that you complete the installation process correctly.

{{< img index="1" alt="image 1" >}}
