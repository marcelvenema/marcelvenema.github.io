---
title: "Color logon background"
description: ""
date: 2014-01-07T09:00:00+01:00
lastmod: 2014-01-07T09:00:00+01:00
image_cover: "mika-baumeister-NSI6XtbabNw-unsplash.jpg"
categories: ["Powershell"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

A customer is working according to the DTAP principle. There is a development, test, acceptance and production environment. The customer wants to quickly identify the environment based on background colors. 

Black for development, grey for test, light blue for acceptance and blue for production. For the desktop background the customer uses RES Workspace Manager. They also use the OEMBackground functionality for a custom logon background. 

I wrote a small PowerShell script to recolor the background images to a specific color. The environment type, D, T, A, or P is stored in the registry, under the HKLM\Software\AF\Stage key. Depending of this value the color is selected.

```powershell
# Color LogonBackground
# 20131224 Marcel Venema
# This script will color all image files in the desired folder with R G B
#
# parameters : path R G B
  
# Function Recolor 
function ReColor { param([string]$imagefile, [int]$r, [int]$g, [int]$b)
 
#Load System.Drawing assembly
[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
 
#Set the color required for the image.
$brush = new-object Drawing.SolidBrush([System.Drawing.Color]::FromArgb($r, $g, $b))
#Get image
$img = [System.Drawing.Image]::FromFile($imagefile)
#Create bitmap
$bmp = new-object System.Drawing.Bitmap([int]($img.width)),([int]($img.height))
#Create intermediate image
$iimg = [System.Drawing.Graphics]::FromImage($bmp)
#Fill image
$iimg.FillRectangle($brush, 0, 0, [int]($img.width), [int]($img.height))
 
#Save image
$img.Dispose()
$bmp.save($imagefile, [System.Drawing.Imaging.ImageFormat]::Jpeg)
 
#Cleanup
$bmp.Dispose()
$iimg.dispose()
}
 
# Main routine
 
$imagepath = "C:\WINDOWS\SYSTEM32\OOBE\INFO\BACKGROUNDS\background*.jpg"
$regkey = Get-ItemProperty -Path HKLM:Software\CSAF -Name Stage
Switch($regkey.Stage)
{
DEV { $red = "0";$green="0";$blue="0";}
TST { $red = "128";$green="128";$blue="128";}
ACC { $red = "40";$green="133";$blue="235";}
PRD { $red = "15";$green="83";$blue="158";}
}
  
 foreach ($file in Get-ChildItem $imagepath)
 {
  ReColor $file ($red -as [int]) ($green -as [int]) ($blue -as [int])

```

Happy coloring !! 

&nbsp;  
&nbsp;  

---

Photo by <a href="https://unsplash.com/@kommumikation?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mika Baumeister</a> on <a href="https://unsplash.com/photos/yellow-orange-and-blue-textile-NSI6XtbabNw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

&nbsp;  