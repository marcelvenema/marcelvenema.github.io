---
title: "RES ONE Workspace UserSettings location"
description: ""
date: 2017-04-11T09:00:00+01:00
lastmod: 2017-04-11T09:00:00+01:00
image_cover: "robin-rocker-qUToqliACNA-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

When using RESONE Workspace, user-specific settings are stored in the Personal Settings folder. The Personal Settings folder is a hidden folder and from a legacy standpoint placed in the home directory of the user. 
In previous version of RESONE Workspace, RES PowerFuse or RES Workspace Manager, the folder was called PWRMENU. You can change the location of the User Settings folder from the RESONE Management Console.

<!--more-->
{{< image src="robin-rocker-qUToqliACNA-unsplash.jpg" alt="" >}}

The Personal Settings folder stores the captured user settings of the user. Depending on the number of configured applications, the number of files stored in the Personal Settings folder are in a range from a dozen to hundreds of small files.

Storing the User Settings on the home drive of the user works relatively well on small to medium environments, but for large environments this location has a major drawback:

Home Folders are often not stored on the fastest storage. When a user logs on, most of the user settings files are loaded by the Workspace composer. In large environments, with hundreds of small user settings files, this can seriously affect the performance of the storage, with longer logon or logoff times as a result.
When few hundred or thousand users are logging on or logging off at the same time, you can image there will be a huge load on the user settings storage controller.


When designing the user setting location I use following three rules as a starting point:


**Design for minimal disk size**

The concept of zero profiles is to store only the settings the application need. Examine all applications carefully not to store unnecessary registry hives or files. For example, if you are using the Mozilla Firefox web browser, do not store the webcache folder in RESONE UserSettings. Depending on the amount of applications, I calculate with an average of 400-2000MB per user disk storage for user settings. Be sure the total amount of disk space is sufficient for all users.


**Design for independence**

To determine or set an user settings location, I recommend not to be dependent on other components or services. For example, you can use an Active Directory property to set an user setting location, but every time an user logs on a query to Active directory domain controller will be sent. Imagine what will happen if there is a slow response or even no response at all.

For most designs I use the %USERNAME% variable or a derivate like the first one or two characters of the username. In this case I am not dependent on queries or other items to resolve.


**Design for performance**

As stated above, home folders are often not stored on the fastest storage. Use a separate location to store your UserSettings folder. If the storage is getting slow, upgrading the UserSettings storage will mostly have less impact than upgrading the home folder storage.

In large environments, there are several platform infrastructure teams like network, storage, workspace, workstations, etc.. Be sure to define performance metrics the various components must comply to. Monitor the performance of the storage, logon times, network latency, etcetera.



The UserSettings location is an important part of the acceptance and experience of the workspace of an end-user. Use above design principles to keep the workspace fresh and the user happy. And do not forget, the (logon duration) numbers will tell the tale….

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@robinrocker?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Robin Röcker</a> on <a href="https://unsplash.com/photos/turned-on-street-lights-during-nighttime-qUToqliACNA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;
