---
title: "Wake-On-Lan with Powershell"
description: ""
date: 2016-04-12T09:00:00+01:00
lastmod: 2016-04-12T09:00:00+01:00
image_cover: "ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
categories: ["Other"]
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

A few weeks ago I wrote about my 4-node IKEA Besta server cluster. To preserve energy, I turn the nodes only on when I need the capacity. This is also good for our energy bill, I do not know how long I can persuade my wife that her hairdryer is responsible for all the electricity costs.

<!--more-->
{{< image src="ilya-pavlov-OqtafYT5kTw-unsplash.jpg" alt="" >}}

Anyway, I use a PowerShell script to send the Wake-On-LAN magic packet to the network card of the selected server. If you want to read more about the Wake-On-LAN functionality, see this Wikipedia article.

```
function Send-WOL
{

<#
 .SYNOPSIS 
   Send a WOL packet to a broadcast address
 .PARAMETER mac
  The MAC address of the device that need to wake up
 .PARAMETER ip
  The IP address where the WOL packet will be sent to
 .EXAMPLE
  Send-WOL -mac 00:11:22:33:44:55 -ip 192.168.2.100
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory=$True,Position=1)]
  [string]$mac,
  [string]$ip="255.255.255.255",
  [int]$port=9
)

$broadcast = [Net.IPAddress]::Parse($ip)
$mac=(($mac.replace(":","")).replace("-","")).replace(".","")
$target=0,2,4,6,8,10 | % {[convert]::ToByte($mac.substring($_,2),16)}
$packet = (,[byte]255 * 6) + ($target * 16)
$UDPclient = new-Object System.Net.Sockets.UdpClient
$UDPclient.Connect($broadcast,$port)
[void]$UDPclient.Send($packet, 102)
}

send-WOL -mac 00-11-22-33-44-55 -ip 192.168.2.100

```

&nbsp;

In order to function correctly, be sure the server BIOS Power Management EuP 2013 settings are set to disabled and in the Wake Up Event Setup configuration the Resume by Onboard LAN is enabled. Also on your hypervisor, be sure you enable Wake-On-LAN on your properties of the network card.

&nbsp;

---
&nbsp;

 Photo by <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ilya Pavlov</a> on <a href="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
