---
title: "ProtectLocalCache registry key"
description: ""
date: 2017-01-26T09:00:00+01:00
lastmod: 2017-01-26T09:00:00+01:00
image_cover: "umit-yildirim-9OB46apMbC4-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

RESONE Workspace uses a local cache folder to store the workspace configuration of the user. The location of the cache folder is `--RESONE Workspace program folder--\DATA\DBCACHE`. By default, this folder is protected by RESONE Workspace and not accessible for the user.

<!--more-->
{{< image src="umit-yildirim-9OB46apMbC4-unsplash.jpg" alt="" >}}

In most cases this protection is fine, unless you want to use some of my RESONE Workspace helper tools and/or utilities.  Some of these tools use the local cache to retrieve information of the current configuration. When the protection is active, the tools cannot access the information and will fail.

To access the RESONE Workspace local cache folder, you must disable this protection when setting the `ProtectLocalCache=false` registry key.


For 32bit workstations:
```
HKEY_LOCAL_MACHINE\Software\RES\Workspace Manager\
Value : ProtectLocalCache Data: REG_SZ: false
```
&nbsp;

For 64bit workstations:
```
HKEY_LOCAL_MACHINE\Software\WOW6432Node\RES\Workspace Manager\
Value: ProtectLocalCache Data: REG_SZ: false
```
&nbsp; 

As this is a HKEY_LOCAL_MACHINE registry key, it cannot set by RESONE Workspace but you can set these registry keys with a Active Directory Group Policy Preference (GPP) or set the registry key with the deployment.


The setting will only work if RESONE Workspace File & Folder security is not enabled or not in learning mode. I am in consultation with RES Software Support if there is another solution.

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@umityildirim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ümit Yıldırım</a> on <a href="https://unsplash.com/photos/red-hard-hat-on-pavement-9OB46apMbC4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;