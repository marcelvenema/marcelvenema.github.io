---
title: "Bypass the Workspace Composer"
description: ""
date: 2017-05-29T09:00:00+01:00
lastmod: 2017-05-29T09:00:00+01:00
image_cover: "bypass_row_2.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

When logging on to a RES ONE Workspace managed session, the Workspace Composer is managing your applications, menu items, settings and security. In most cases you want to use the Workspace composer, even for Helpdesk staff and System Administrators. Just create zone rules and workspaces to create exceptions for the administrators to do their job, but more about that in a future post.

{{< image src="bypass_row_2.jpg" alt="" >}}

There are a few use cases where you want to bypass the RES ONE Workspace Composer. Like package, test or troubleshoot applications for example. Keep in mind, when you bypass the Workspace Composer, you also bypass the RES ONE Workspace security features.

You can configure the ‘bypass the RES Workspace Composer’ functionality with the RES ONE Workspace Management Console: Open the console, select Setup – Advanced Settings from the menu and set the tick box: Bypass composer for accounts and groups. Enter the account- or group name. Multiple entries must be separated with a semicolon (;)

{{< image src="bypass_row_1.jpg" alt="" >}}

There are a few things to consider: The user must be a member of the local administrator group, you can only use wildcards on accounts, not groups, and nested groups are only supported within the same domain as the logged on account.

An ideal scenario would be to use this feature in combination with RES ONE Identity Director. A packager, tester, system administrator or other person can request the ‘bypass Workspace Composer’ service to bypass the Workspace Composer for 30 minutes. After 30 minutes the service is automatically returned and with the next logon, the user will have the Workspace Composer again.

&nbsp;
