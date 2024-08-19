---
title: "Spring 2014 RSVP Meeting"
description: ""
date: 2014-04-21T09:00:00+01:00
lastmod: 2014-04-21T09:00:00+01:00
image_cover: "nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: ["RESWM"]
draft: false
---

Last Thursday I was at RES Software HQ for the Spring update meeting of the RES Valued Professionals.

{{< image src="nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg" alt="RES Software Spring 2014 RSVP Meeting" >}}

Peter Jansen, software architect of RES Software started with a session about network traffic deep dive. The bandwidth throttling functionality of RES Automation Manager is not a ‘pure’ quality of service option. Instead of sending a constant stream of data with a specific bandwidth the RES-AM agent or dispatcher sends chunks of data and pauses an amount of time after each chunk to meet the selected bandwidth requirements. Very clever. Another tip is not to deploy the RES Automation Manager console to all users. The console connects directly to the datastore. With the installation of the console, the RES Automation Manager Console Service will also be installed. As the Console service is set to automatic, it automatically connects to the datastore. In large environments with hundreds of agents the database administrator will not be very happy. 

Next session is Dennis van de Peppel sharing best practices about a recent RES IT-Store implementation at a government agency. A very good insight in connecting HR application data to the IT Store infrastructure. 

I also did a 10 minute session about the DeleteUserSettingsWizard. With this tool the end-user can delete specific RES-WM usersettings themselves. See my blog article a few weeks ago for more information. Funny detail is that during the following roadmap session after my presentation similar functionality was announced and will be implemented in a future RES-WM version.

After my session the product management team talked about the roadmap of future versions of the various RES Software products. It is all under NDA so unfortunately I cannot tell much about it. What I can tell is the next service releases of RES Workspace Manager, RES Automation Manager and the IT Store are expected to be released around Q2 2014. At the end of the meeting all RSVP’s are rewarded with a small gift, the ‘Auto Man’ usb stick. Thank you RES Software!

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@sunday_digital?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nastuh Abootalebi</a> on <a href="https://unsplash.com/photos/photo-of-dining-table-and-chairs-inside-room-eHD8Y1Znfpk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;
