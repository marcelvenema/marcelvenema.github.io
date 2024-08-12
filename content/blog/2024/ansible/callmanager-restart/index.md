---
title: "Ansible: Restart Cisco CallManager"
description: ""
date: 2024-08-01T09:00:00+01:00
lastmod: 2024-08-01T09:00:00+01:00
image_cover: "pavan-trikutam-71CjSSB83Wo-unsplash.jpg"
gallery_images:
 - "pavan-trikutam-71CjSSB83Wo-unsplash.jpg"
categories: ["Ansible"]
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

Shutting down or restart Cisco CallManager with VMWare vSphere management console isn't a good idea. In worst case, the CallManager database will be corrupted and the only solution is to restore a backup.

<!--more-->

Aside from possible corruption, restarting the Cisco CallManer manually can be a time-consuming and error-prone task, especially in large environments with multiple CUCM clusters. This is where automation tools like Ansible come into play. In this blog, we'll explore how to use Ansible to automate the restart of Cisco CallManager services, ensuring a more efficient and error-free process. 



Photo by <a href="https://unsplash.com/@ptrikutam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pavan Trikutam</a> on <a href="https://unsplash.com/photos/minimalist-photography-of-three-crank-phones-71CjSSB83Wo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>