---
title: "FIPS or no FIPS, that's the question"
description: ""
date: 2017-01-22T09:00:00+01:00
lastmod: 2017-01-22T09:00:00+01:00
image_cover: "ming-jun-tan-o6ICDlt5_2k-unsplash.jpg"
categories: ["RESSoftware"]
authors: ["Marcel Venema"] 
tags: []
draft: false
---

When designing a new infrastructure for a large customer, there was a strong desire to use FIPS compliance with the RESONE Workspace environment.  Since version 2015 the RESONE Workspace software can use Federal Information Processing Standard (FIPS) compliant security algorithms.

{{< image src="ming-jun-tan-o6ICDlt5_2k-unsplash.jpg" alt="" >}}

Ultimately, FIPS is a set of U.S. government standards that define how and which encryption algorithms are used. It does not make RESONE Workspace more secure. It only forces RESONE Workspace to use FIPS-validated encryption schemes.

During a short Proof of Concept period I played with the functionality and as an administrator I found it, how to say it nicely, ‘special’ :

When using Windows authentication, FIPS can only be enabled when creating the DataStore from the RESONE Workspace Management Console. It is not possible to let the database administrator create a database and then connect to the database unattended. According to the manual, this will work with SQL Authentication.
When creating building blocks a password is always required. The password cannot be empty.
You cannot import building blocks from a FIPS compliant DataStore to a non-compliant DataStore. It is possible to import non-FIPS building blocks to a FIPS environment. So if you developing building blocks for different customers, when using a FIPS compliant DataStore be sure all your customers are too.
When importing buildingblocks unattended, a hashed password is required. This hashed password is one-time displayed during creation of a building block.
Building blocks can only be imported one-by-one to a FIPS complaint DataStore.
Oracle DataStore support for FIPS compliancy is expected in future RESONE Workspace versions.
Maybe there are more considerations, but this is what I found during the short test.

My personal advise: If you are a US based government organization and are obliged to use the RESONE Workspace FIPS option, you have no choice. But if you have……

&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@mingjuntan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ming Jun Tan</a> on <a href="https://unsplash.com/photos/yellow-flowers-o6ICDlt5_2k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
&nbsp;
