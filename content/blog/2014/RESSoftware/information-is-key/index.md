---
title: "Information is key"
description: ""
date: 2014-03-04T09:00:00+01:00
lastmod: 2014-03-04T09:00:00+01:00
image_cover: "jan-mellstrom-tofagMI_UCM-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: ["RESWM"]
draft: false
---

When doing a migration project, having the correct information about your workstations is critical for success. You want to know where the workstation is located, which employee is using it and what software is installed.

Many organizations have these figures centrally stored in a configuration management database (CMDB). What I see in many of my projects that the CMDB database is not completely accurate. It looks like the bigger the organization, the less accurate the figures are. 

{{< image src="jan-mellstrom-tofagMI_UCM-unsplash.jpg" alt="Information is key" >}}

Mostly there are various legitimate reasons for it, but the fact remains when migrating workstations, you need to know the information what is on the workstation.

Another problem is when doing a greenfield workspace migration you want to know which application an user uses, not which applications are installed on the workstation. Also you want to know which drive mappings, printer connections and networks the user is using. 

There are various tools like Microsoft SystemCenter Configuration Manager, LanDesk Management Suite, Novell ZenWorks, Altiris Client Management Suite who can do the job but as a RES Software Certified Trainer I prefer to use the free RES Baseline Desktop Analyzer.

The RES Baseline Desktop Analyzer has been designed by RES Software to give an insight into your Microsoft desktop environment by providing:
 
1. Hardware Inventory 
2. Application Landscape 
3. User Population 
4. Location Layout 
5. Printing Topology 

The RES Baseline Desktop Analyzer is a small tool to sample the above information from a user’s workstation. The tool itself has no user interface, runs in the background and produces a small .dts sample file. Collect the sample files over a period of time and upload these files to www.resbaselinedesktopanalyzer.com Let the website analyze the data and then download and review the various reports.

## Installation
Installation of the Baseline Desktop Analyzer is very simple. Sign-up for the service at their website and download the desktop sampler. You can download a MSI software installation package for your software distribution system or can download an .EXE file to use within your existing logon script.

You can use the following command-line parameters of MSI parameters:

- SAMPLEPATH - Specifies the location of the sampled data. This location can also be set in the registry at HKEY_LOCAL_MACHINE\SOFTWARE\RES\desktop sampler. If you do not supply a location, the sampled data will be stored in the installation folder of the dtsSampler application. 
- EXPIREDAYS - Specifies the number of days the sampler needs to remain installed. After the specified number of days, the application will uninstall itself. If this parameter is not used, dtsSampler will continue to run until it is manually uninstalled. 
- DELAY - Specifies the number in seconds, the sampler should wait after a user logs on before it starts sampling data. This is useful when logon procedures take a long time. Specify a number in seconds. By default, the tool waits for 60 seconds. 

To use the Desktop Sampler with a logon script you must do the following:

- Create a Windows shared folder with write permissions for your users and accessible from all workstations. 
- Download the Desktop sampler from the website and copy it to the shared folder. 
- Add the Desktop sampler to your logon script for execution. Use the commandline parameters if applicable. 
- Wait to collect the data from the shared folder. 

&nbsp;
## Desktop Sampler files
The sampler produces compressed and encrypted files of approx. 15Kb in size. These files can be uploaded to the website. It is critical to collect enough samples and let the tool run for at least 40 days. This ensures you are covering most of the tasks a user has used. After the collection period is finished you can upload the .dts files to the www.resbaselinedesktopanalyzer.com website.

&nbsp;
## Reports
After the upload, the files will be analyzed. When ready, you get a completion e-mail and can review six different reports:

1. Analysis Summary: summary of Microsoft operating systems in use; device types (desktop/laptop); memory; screen resolutions; top ten most common applications used; top ten rare common applications used; remote vs local users; roaming vs non-roaming; network printers vs local; top ten printer types; breakdown of IP addresses to give a view of locations. 
2. Hardware Inventory: Installed internal memory per device; screen resolution; operating system version (including service pack level and bit version); processor architecture, type and speed; chassis type (laptops vs desktops); model types and display adapters. 
3. Application Landscape: top fifty of common applications most used; rarely used applications; never used applications; all used applications used in the past 90 days. 
4. User Population: provides information about the amount of domain groups per domain, user types and devices per domain and whether devices are shared or dedicated. 
5. Location Layout: presents a list of networks found in the sample files. The networks discovered are split into class-a and class-c networks. 
6. Printing Topology: Local printers versus network printers; top 10 configured individual printers (local and network); top 10 printer types based on printer driver used (local and network) and a list of all printers in use. 

RES Software partners or resellers also have the possibility to download the raw data in Microsoft Excel format so you can relate the report data to combinations like which user/machine. 

&nbsp;
## Summary
Having the right information is the key to success. With every migration project, do not rely on the data provided, but also sample the environment to get a clear overview. Do not rush the sampling period, take your time to ensure all applications get sampled. 

Consult a RES Software Partner consultant, preferably with surname Marcel :-), to get the Excel spreadsheet with the raw data. Plan your migration carefully, but i will write a blog about the next steps in the near future. 

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@mrjane?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jan Mellström</a> on <a href="https://unsplash.com/photos/pile-of-books-tofagMI_UCM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;
