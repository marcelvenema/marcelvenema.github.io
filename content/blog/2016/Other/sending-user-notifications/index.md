---
title: "Sending User Notifications"
description: ""
date: 2016-09-15T09:00:00+01:00
lastmod: 2016-09-15T09:00:00+01:00
image_cover: "WindowsNotifications2.jpg"
categories: ["Powershell"]
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

For me, when designing user workspaces, user experience is key. In my opinion the system should notify a user when something with the user workspace is wrong.

<!--more-->
{{< image src="WindowsNotifications1.jpg" alt="" >}}

For example, when a RESONE Workspace UserSetting location or Home folder is not available, the system should notify the user that it is not available and should ask to contact the system administrator. This can be done with a simple message box, but when using Microsoft Windows 10 it is much cooler to use a notification from the Action Center.


To detect if something is wrong, I use a two-step process. First I use the Location & Devices feature from RESONE Workspace. When detecting if the user has a home directory, I create a Zone called NO-HOMEDRIVE with a rule based on Configuration – Files and Folders – File or Folder Exists – Drive H: Does NOT exists.


Second step is to create a Execute Command based on the just created zone. The Execute Command will use a PowerShell script to send the notification.

This is my PowerShell script:

```

[xml]$toast = @"
(toast duration="long" )(visual)(binding template="ToastGeneric")(image id="1" placement="appLogoOverride" src="" /)(text id="1")(/text)(text id="2")(/text)(text id="3")(/text)(/binding)(/visual)
(audio src="ms-winsoundevent:Notification.Reminder"/)(/toast)
#Please replace above brackets with xml brackets. I am sorry, editor cannot show xml :-(
"@
Start-Sleep -s 60 # wait 60 seconds to prevent timing issue
$app = "MarcelVenema.com"
$image = "C:\Temp\MV.PNG"
$caption = "Warning"
$text1 = "Your personal folder (H:) cannot be accessed. (code: P32) Please contact your system administrator."
#$text2 = ""
$element = $toast.GetElementsByTagName('image'); $element[0].src = "file:///$image"
$element = $toast.GetElementsByTagName('text')[0].innerXML = $caption;
$element = $toast.GetElementsByTagName('text')[1].innerXML = $text1;
$element = $toast.GetElementsByTagName('text')[2].innerXML = $text2;
[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]
$notify = [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($app)
$notification = New-Object -TypeName Windows.Data.Xml.Dom.XmlDocument
$notification.LoadXml($toast.OuterXml)
$notify.Show($notification)

```

&nbsp;

Generally speaking, I use notifications for the following events:

- No Home drive
- No RESONE Workspace User Settings folder
- Inform users using Development/Test environment.
- Inform users using Management workstation.
- Wrong workstation deployment / OU placement.
- etc.

A RESONE Workspace BuildingBlock is also provided for your convenience, see Attachments download below.

UPDATE January 13, 2017: I added a Start-Sleep command at the beginning of the script to wait for 60 seconds. Dennis van Dam mailed me the script wasn't working. It turned out, when starting a new session, the toast notification class is not ready at logon. Just wait 60 seconds, or maybe longer, and then display the message. Another solution is not to use the RESONE Workspace Execute Command and create a hidden autolaunched application.

{{< image src="WindowsNotifications2.jpg" alt="" >}}

&nbsp;
