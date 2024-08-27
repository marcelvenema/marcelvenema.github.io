
---
title: "Remove password from Word document"
description: ""
date: 2018-09-06T09:00:00+01:00
lastmod: 2018-09-06T09:00:00+01:00
image_cover: "caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg"
categories: []
authors: ["Marcel Venema"] 
tags: []
draft: false
---

Last week my wife asked me if I could help her with a Microsoft Word problem. The company she works for has about 8.000 Word documents, and most of them are protected with the same password. For an ERP implementation all article numbers in those documents must be replaced with new article numbers.

<!--more-->
{{< image src="caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg" alt="" >}}

The ERP consultants said that the password must be removed manually from all 8.000 documents. It could not be done automatically. My wife and her colleagues in distress, the idea of removing the password manually for all 8.000 documents seemed not a very good idea.

My wife asked for my help and I wrote a small script to remove the password automatically. The script asks for a password and then opens all documents in the script folder and removes the password. The documents are then saved with a .PWDREMOVED.docx extension.

```
Function RemovePassword {
  param(
    $filename,
    $password
  )

  $ConfirmConversions = $false
  $ReadOnly = $true
  $AddToRecentFiles = $false

  $word = New-Object -ComObject Word.Application
  $word.Visible = $false

  $doc = $word.Documents.Open($filename, $ConfirmConversions, $ReadOnly, $AddToRecentFiles, $password)
  $doc.Activate()
  $doc.SaveAs( $filename.Replace(".docx", ".PWDREMOVED.docx")) 
  $doc.Close()
  $word.quit()
  Write-Host "password removed document $filename"
}

$password = Read-Host "Please enter password to unlock document: "

$files = Get-ChildItem (Get-Item -Path ".\").FullName -Filter "*.docx"
ForEach ($file in $files) {
  $filename = $file.FullName
  RemovePassword -FileName $filename -Password $password
}

```
&nbsp;

Finally, a word to the ERP consultants, a thank you cake or chocolate box for my wife is highly appreciated….

&nbsp;  

---
&nbsp;

Photo by <a href="https://unsplash.com/@casparrubin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Caspar Camille Rubin</a> on <a href="https://unsplash.com/photos/macbook-pro-with-images-of-computer-language-codes-fPkvU7RDmCo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp; 