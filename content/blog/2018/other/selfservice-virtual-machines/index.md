---
title: "Showcase: Selfservice Virtual Machines"
description: ""
date: 2018-10-17T09:00:00+01:00
lastmod: 2018-10-17T09:00:00+01:00
image_cover: "markus-spiske-kK7uPfb2YWU-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Administer virtual machines from the Ivanti Identity Director SelfService portal.
In this blog I want to showcase the Virtual Machine operations services from the Identity Director SelfService portal. With these services an end-user or administrator can perform virtual machine operations like create-, delete-, start-, stop- or restart a virtual machine.

<!--more-->
{{< image src="markus-spiske-kK7uPfb2YWU-unsplash.jpg" alt="" >}}

Sure, every time you or an user wants a virtual machine you can use vCenter, XenServer console or Hyper-V Manager to create a VM, but is is a lot easier to delegate this to the user. Simple administer the VM selfservice option instead of doing repetitive tasks over and over again.

There are seven services:


**VM Operations**
With this service people can request access to the Virtual Machine Operations service. When entitled, people can create, delete, start, stop and restart virtual machines. 
The service can be extended with a approval workflow where a manager or system administrator has to approve access.


{{< image src="VM-create-GRAY.png" alt="" >}}
**Create VM**
This service will create a virtual machine. Actually there are two services, a 'simple' service where people only set the role of the VM and a more advanced service where people can specify number of CPU, memory, disk size, network connections and operating system.

&nbsp;

{{< image src="VM-edit-GRAY.png" alt="" >}}
**Edit Virtual Machine**
With this service entitled people can edit virtual machine parameters.  Parameters which can be edited:
- Number of CPU's: 2, 4 or 8.
- Assigned memory: 4, 8, 16 or 32 GB.
- Disk size: 60, 100, 120, 200GB
- Network vlan.

&nbsp;

{{< image src="VM-delete-GRAY.png" alt="" >}}
**Delete VM**
This service will delete the selected VM. The VM will not be directly deleted, but stopped and 'marked for deletion'. Periodically the system administrator receive a list of VM's and can decide to delete them.

&nbsp;

{{< image src="VM-settings-GRAY.png" alt="" >}}
**Start VM, Stop VM, Restart VM**
This services will start, stop or restart a virtual machine. Request the service, select the virtual machine from a list of started or stopped machines and confirm the request.  The service can be extended to automatically generate a service request in ServiceNow or TopDesk with every action.

&nbsp;

{{< image src="VM-deletesnapshot-GRAY.png" alt="" >}}
**Create snapshot, restore snapshot VM**
Two special services are Create Snapshot VM and Restore snapshot VM. These are available for application packagers or system administrators. With this service a VM snapshot can be created, for example at the start of the application packaging process. When the package is created the snapshot can be restored to the original VM with the other service.



&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Markus Spiske</a> on <a href="https://unsplash.com/photos/multicolored-electronic-part-kK7uPfb2YWU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;
