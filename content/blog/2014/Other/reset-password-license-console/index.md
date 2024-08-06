---
title: "Reset password of Citrix License Management Console"
meta_tile: ""
description: ""
date: 2014-08-31T09:00:00+01:00
image_cover: "/img/blog/2014/rc-xyz-nft-gallery-q7h8LVeUgFU-unsplash.jpg"
categories: ["Citrix"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

When installing Citrix License Server on a non-Active Directory domain server, the default username and password for access is ‘admin’. On an Active Directory server, the user who has installed the license server first is added to the Citrix Administrators to access the console.

Especially when working on projects, engineers or consultants tend to forget to add an extra Windows AD security group to the License Management Console after installation. After a few weeks the consultant or engineer is working for another client, and the user account will be deleted, letting the License Management Console inaccessible.

Steps to reset the password:

- Create a backup of the ../Citrix/Licensing/LS/Conf/server.xml file

- Open file ../Citrix/Licensing/LS/Conf/server.xml on the Citrix License Server.

- Edit the following line:

- Replace the text between the quotes of ‘password=’ with a new password. Do not use (ENC-01).

- Set passwordExpired=”true”

- Save the server.xml file

- Restart all Citrix Licensing services on the Citrix License Server.

- Log in to the Citrix License Management Console with username and chosen password. You are prompted to change the password.


See also Citrix knowledgebase article [CTX200163](http://support.citrix.com/article/CTX200163)

&nbsp;  
&nbsp;  

---

Photo by <a href="https://unsplash.com/@moneyphotos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">rc.xyz NFT gallery</a> on <a href="https://unsplash.com/photos/a-bunch-of-keys-sitting-on-top-of-a-table-q7h8LVeUgFU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;  
