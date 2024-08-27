---
title: "Remove 'press anyt key...' from WinPE boot ISO"
description: ""
date: 2018-03-25T09:00:00+01:00
lastmod: 2018-03-25T09:00:00+01:00
image_cover: "jandira-sonnendeck-AcW1ZwD-qC0-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Part 4 of 6: **Remove ‘Press any key…’ from WinPE boot ISO**

When using the default WinPE ISO boot file, there is only one little tiny small problem, you must press any key during the boot process to continue, otherwise the VM will boot from network. This is not very handy in an automated environment. 

<!--more-->
{{< image src="jandira-sonnendeck-AcW1ZwD-qC0-unsplash.jpg" alt="" >}}

To prevent this behavior, the ISO boot file must be changed. For an UEFI BIOS, the file efisys.bin must be replaced with the efisys_noprompt.bin file. Naturally, I have created an Automation buildingblock for this.

The buildingblock uses OSCDIMG.EXE from the Microsoft assessment and Deployment Toolkit (ADK) to repack the ISO file with the noprompt option. ADK is a prerequisite for MDT and should be installed on the MDT server.

First, the script searches for the path to OSCDIMG.EXE file. When found, the script unpacks the ISO file to %TMP%\ISO. With OSCDIMG.EXE a new ISO file is created with the noprompt option. 


Automation Parameters:

**MDT.ISOFOLDER** - Path to folder where WinPE ISO file is stored. Please be sure to use trailing backslash, for example D:\ReferenceShare\Boot\
**MDT.ISONAME** - Name of WinPE ISO file, for example REF-MV001-DS1-x64.ISO

```
# Repack ISO to disable 'press any key' function

$ISOfolder = "$[MDT.ISOFOLDER]" 
$ISOname = "$[MDT.ISONAME]" 
 
Write-Host "Detect OSCDIMG.EXE..." 
$oscdimg = Get-ChildItem -Path "c:\" -Filter "OSCDIMG.EXE" -Recurse -ErrorAction SilentlyContinue -Force | % { $_.FullName } | Select-String -Pattern "amd64" 
Write-Host "oscdimg: $oscdimg" 
$oscdimgfolder = Split-Path $oscdimg -Parent 
If ($oscdimg -eq "") { 
   Write-Host "Warning! Not found..." 
} 
Else 
{ 
   Write-Host "OK..." 
} 
$etfsboot = "$oscdimgfolder\etfsboot.com" 
$efisys = "$oscdimgfolder\efisys_noprompt.bin" 


# Mount ISO 
Write-Host "Mount ISO file $Isoname on folder $ISOfolder..."
$ISO = "$ISOFolder$ISOname"
Mount-DiskImage -ImagePath $ISO -StorageType ISO -Passthru -Verbose

# Get drive letter 
$driveletter = (Get-DiskImage -ImagePath $ISO | Get-Volume).DriveLetter + ":" 


# Copy files 
$folder = "%TMP%\ISO\" 
If (!(Test-Path $folder)) { 
   New-Item -Type Directory -Path $folder
} 
Copy-Item $driveletter\* $folder -Force -Recurse


# Unmount ISO 
Write-Host "Unmount ISO..." 
Dismount-DiskImage -ImagePath $ISO -Verbose 

# Remove read-only attributes 
Get-ChildItem $folder -Recurse | %{ if (! $_.psiscontainer) { $_.isreadonly = $false}} 

Write-Host "Repacking to %TMP%\$[MDT.ISONAME]..."
$bootdata = '2#p0,e,b"{0}"#pEF,e,b"{1}"' -f $etfsboot, $efisys
Write-Host "bootdata: $bootdata"
Write-Host "folder: $folder"
Write-Host "oscdimg: $oscdimg"
Start-Process $oscdimg -args @("-bootdata:$bootdata",'-m', '-o', '-u2','-udfver102', $folder, '%TMP%\WinPE.ISO') -wait -nonewwindow


```

The buildingblock can be downloaded here. 

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@jandira_sonnendeck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jandira Sonnendeck</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-disc-with-a-toothbrush-on-top-of-it-AcW1ZwD-qC0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;