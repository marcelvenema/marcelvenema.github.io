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

New hardware for my Nutanix CE homelab means a new installation of Nutanix Community Edition! Nutanix released a new version about a month ago with lots of new features and enhancements. 
<!--more-->

{{< image src="hannah-busing-Zyx1bK9mqmA-unsplash.jpg" alt="" >}}

Nutanix CE is a free, self-support version of the Nutanix software stack, built for use in non-production environments. It provides users with a hands-on opportunity to explore Nutanix's hyperconverged infrastructure technology, which combines storage, computing, and networking into a single, easily scalable platform. For anyone curious about how Nutanix works in a real-world setting, CE offers a fully functional environment without the need for costly enterprise licensing.

The installation process for Nutanix CE has been simplified in version 2.1, though some knowledge of virtualization and networking is still necessary. One key benefit of this release is its improved compatibility with newer hardware and expanded storage options. Users can now deploy CE on a wider range of systems, making it easier to test configurations before rolling out a full production environment.

The biggest improvement is that Nutanix CE is now based on the latest AOS, 6.8.1, and will follow the normal lifecycle updates of AOS and AHV from the commercial versions. You don't have to wait ages for a specific Nutanix CE version anymore. :-)
It is compatible with the commercial version of Prism Central, allowing users to try out all great other features and access the PrismCentral API for automation.<br/>
Drawbacks are no VMWare ESXi support anymore and no automatic cluster creation after installation, requiring manual installation of the cluster (and Prism Element) via the commandline.
<br/>

## Nutanix CE installation
Create a bootable USB from the Nutanix CE 2.1 ISO file, boot, and wait until the installer screen appears. Select the disk for the AHV hypervisor (H), the CVM disk (C) and the disk to store the data (D).
Fill in host IP address, CVM IP address, subnet and gateway IP address. Click on `Next Page`, accept the license terms and start the installation!


{{< image src="ntnx-ce.jpg" alt="" >}} 
<br/>

When planning the installation of the Nutanix CE environment, it is wise to take into account you need multiple IP addresses:

- Nutanix AHV host IP address
- CVM virtual machine with Prism Element IP address
- Nutanix Prism Central virtual machine IP address
- Cluster virtual IP address
- iSCSI Data Services IP address

<br/>


## Cluster configuration

After installation of Nutanix CE, reboot the server and login to the CVM with <kbd>nutanix</kbd> and password <kbd>nutanix/4u</kbd>. Do not forget to change this default password with the `passwd` command. Create the cluster with the command: `cluster -s <ip address of CVMs> --redundancy_factor=1 --dns_servers <ip adress of DNS servers> create`

When the cluster is created, the PrismElement web management console should be accessible via `https://<CVM ip address>:9440`.<br/>
Login to the management console with user <kbd>admin</kbd> and password <kbd>nutanix/4u</kbd>, change the password and login again. After login provide your Nutanix NEXT credentials to start using Nutanix CE.  


{{< image src="ntnx-web-console.jpg" alt="" >}} 
<br/>


&nbsp;  

---
&nbsp;

Photo by <a href="https://unsplash.com/@hannahbusing?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hannah Busing</a> on <a href="https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  