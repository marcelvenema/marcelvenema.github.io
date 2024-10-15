---
title: "Powershell: Resize .jpg images"
description: ""
date: 2024-09-12T09:00:00+01:00
lastmod: 2024-09-12T09:00:00+01:00
image_cover: "ali-karimiboroujeni-kAVb4iXFhDA-unsplash.jpg"
categories: ["Powershell"]
authors: ["Marcel Venema"] 
tags: [""]
draft: false
---

Imagine you have a task to resize 1500+ photo's and prepare them for web content usage. Use a Powershell script! 

<!--more-->
{{< image src="ali-karimiboroujeni-kAVb4iXFhDA-unsplash.jpg" alt="" >}}

I developed a website for a charity organization to showcase past and future events. The storage space provided by the hosting provider is limited. When using over 1,500 photos, each photo with an original file size of about 6MB, a hosting plan upgrade becomes necessary after every three events :-) Given the limited budget of the charity organization, I created a PowerShell script to resize the images to 1920x1080 and adjust the compression level. 

```powershell
# Importing .NET libraries for image processing
Add-Type -AssemblyName System.Drawing

# Set the sourceFolder path to the current folder

$sourceFolder = "$($PSScriptRoot)\source"

$destinationFolder = "$($PSScriptRoot)\destination"

# Create destination folder if it doesn't exist
if (-not (Test-Path -Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder
}

# Set the target sizes
$targetWidth1 = 1920
$targetHeight1 = 1280
$targetWidth2 = 1280
$targetHeight2 = 1920

# Define the JPEG quality level
$jpegQuality = 40

# Function to calculate new size while maintaining aspect ratio
function Get-NewSize {
    param (
        [int]$originalWidth,
        [int]$originalHeight,
        [int]$targetWidth,
        [int]$targetHeight
    )

    $ratioX = $targetWidth / $originalWidth
    $ratioY = $targetHeight / $originalHeight
    $ratio = [Math]::Min($ratioX, $ratioY)

    return @{
        Width  = [int]($originalWidth * $ratio)
        Height = [int]($originalHeight * $ratio)
    }
}

# Function to resize and save image
function Resize-Image {
    param (
        [string]$filePath
    )

    # Load the image
    $img = [System.Drawing.Image]::FromFile($filePath)

    # Calculate new size for both orientations
    $newSize1 = Get-NewSize -originalWidth $img.Width -originalHeight $img.Height -targetWidth $targetWidth1 -targetHeight $targetHeight1
    $newSize2 = Get-NewSize -originalWidth $img.Width -originalHeight $img.Height -targetWidth $targetWidth2 -targetHeight $targetHeight2

    # Choose the best fit
    if (($newSize1.Width * $newSize1.Height) > ($newSize2.Width * $newSize2.Height)) {
        $newWidth = $newSize1.Width
        $newHeight = $newSize1.Height
    } else {
        $newWidth = $newSize2.Width
        $newHeight = $newSize2.Height
    }

    # Create new resized bitmap
    $resizedImage = New-Object System.Drawing.Bitmap($newWidth, $newHeight)

    # Create graphic object
    $graphics = [System.Drawing.Graphics]::FromImage($resizedImage)
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # Draw the resized image
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)

    # Release resources
    $graphics.Dispose()

    # Set the output file path
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($filePath)
    $outputPath = Join-Path $destinationFolder ("$fileName-resized.jpg")

    # Save the image with JPEG quality of 40%
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $jpegQuality)
    $resizedImage.Save($outputPath, $jpegCodec, $encoderParams)

    # Release resources
    $resizedImage.Dispose()
    $img.Dispose()
}

# Process each jpg image in the folder
Get-ChildItem -Path $sourceFolder -Include ('*.jpg', '*.jpeg') -Recurse | ForEach-Object {
    Resize-Image -filePath $_.FullName
}

Write-Host "Image resizing completed!"

```
<br/>


The script is available in my public Powershell repository on Github : [github.com/marcelvenema/Powershell](https://github.com/marcelvenema/Powershell)<br/>


Take a look at the result of the events page of the charity organization: [events.deinkleurporsche.nl](https://events.deinkleurporsche.nl).<br/>

Happy photo resizing!
<br/>

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@alikarimiboroujeni?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ali Karimiboroujeni</a> on <a href="https://unsplash.com/photos/a-man-taking-a-picture-of-himself-in-a-mirror-kAVb4iXFhDA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;