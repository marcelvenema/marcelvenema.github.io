---
title: "Using SessionManager with Epic Hyperspace"
description: ""
date: 2015-05-16T09:00:00+01:00
lastmod: 2015-05-16T09:00:00+01:00
image_cover: "hush-naidoo-jade-photography-ZCO_5Y29s8k-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

The Epic Hyperspace electronic health record software relies heavily on the clientname of the endpoint device to function properly. In a single-hop scenario, from endpoint device to XenApp Hyperspace session, the clientname of the endpoint is transferred when users are roaming to another endpoint. In a double-hop scenario this does not work.

<!--more-->

{{< image src="hush-naidoo-jade-photography-ZCO_5Y29s8k-unsplash.jpg" alt="Using SessionManager with Epic Hyperspace" >}}

With a double-hop scenario, an endpoint device is connected to a virtual XenApp or XenDesktop session. This is the first hop. From this session a new session is made to the XenApp Hyperspace published application. This is the second hop. When a user is roaming to another endpoint, only the clientname environment variable of the first hop is updated. The clientname variable on the second hop will be unchanged.

When using the SessionManager tool on the first- and second hop, the clientname will be updated when a user roams to another endpoint.


## Epic Hyperspace Steps:
Epic Hyperspace can use the %CLIENTNAME% environment variable as client identifier or it can use a registry key as client identifier. In order to work with the SessionManager tool, the client identification method must be set to the registry. Consult the ‘Set Up Your Client to Support Roaming Hyperspace’ section in the ‘Hyperspace installation setup and support guide’ for detailed information. In short, change the Clientname identifier in the EPIC.CLI file to something like

 \# HKEY_CURRENT_USER\SOFTWARE\ MarcelVenema\SessionManager\Current_ClientName \#
 
Please do not forget the pound (#) symbols around the registry key.

The second step is to enable roaming support in Epic Hyperspace. Work closely with an Epic Client Systems Administrator and enable roaming support in the Epic Systems Definitions. (d ^%ZeUSTBL). Consult the ‘Enable Roaming Support for Hyperspace’ section in the ‘Hyperspace Login Setup and Support Guide’ for detailed information.


## SessionManager Steps:

In the SessionManager.config.xml file, the clientnameregkey field obviously must match the same registry key as described in the EPIC.CLI file clientname field. Also the usevirtualchannel field must be set to yes. The SessionManager tool uses a virtual channel to transfer the updated clientname to the second hop. The SessionManager tool must be installed on the first- and second hop and must be started whenever a user starts a session.

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@hush52?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hush Naidoo Jade Photography</a> on <a href="https://unsplash.com/photos/person-walking-on-hallway-in-blue-scrub-suit-near-incubator-ZCO_5Y29s8k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;

