---
title: "Automating SSH Key Deployment with Powershell"
description: ""
date: 2024-12-24T06:00:00+01:00
lastmod: 2024-12-24T06:00:00+01:00
image_cover: "rc-xyz-nft-gallery-j7mGBT2hyM8-unsplash.jpg"
categories: ["DevOps"]
authors: ["Marcel Venema"] 
tags: [""]
draft: true
---

Managing SSH keys is essential for system administrators and DevOps engineers. It ensures secure, passwordless access to remote servers and prevents unauthorized entry. SSH key-based authentication simplifies secure access by removing the need for passwords. This article covers a quick way to automate deploying an SSH public key to a remote server using a PowerShell oneliner.

<!--more-->
{{< image src="rc-xyz-nft-gallery-j7mGBT2hyM8-unsplash.jpg" alt="" >}}

The following PowerShell command transfers your SSH public key to a remote server and appends it to the ~/.ssh/authorized_keys file:

```
cat $env:USERPROFILE\.ssh\id_ed25519.pub | ssh ansible@192.168.29.10 
"touch ~/.ssh/authorized_keys ; cat >> ~/.ssh/authorized_keys"
```


## Breaking Down the Command

Let’s dissect the command to understand its components:<br/>
`cat $env:USERPROFILE\.ssh\id_ed25519.pub`: This reads the contents of your SSH public key file. Replace `id_ed25519.pub` with your specific public key file if you're using a different key type, such as id_rsa.pub.

`ssh ansible@192.168.29.10`: This establishes an SSH connection to the remote server. Replace `ansible` with your username and `192.168.29.10` with the IP address or hostname of your server.

`"touch ~/.ssh/authorized_keys ; cat >> ~/.ssh/authorized_keys"`: This ensures the `~/.ssh/authorized_keys` file exists and appends your public key to it.

- `touch ~/.ssh/authorized_keys`: Creates the file if it doesn't already exist.

- `cat >> ~/.ssh/authorized_keys`: Appends the public key data from the local machine to the remote server’s `authorized_keys` file.


## Example Use Case

Imagine you’re setting up an Ansible control node to manage your servers. Using the above PowerShell oneliner, you can quickly deploy your SSH public key to enable passwordless authentication for the ansible user:

```powershell
cat $env:USERPROFILE\.ssh\id_ed25519.pub | ssh ansible@192.168.29.10 
"touch ~/.ssh/authorized_keys ; cat >> ~/.ssh/authorized_keys"
```

Once completed, you can verify the setup by logging in to the server:

```
ssh ansible@192.168.29.10
```

If successful, you’ll no longer be prompted for a password.


&nbsp;

---
&nbsp;

Photo by <a href="https://unsplash.com/@moneyphotos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">rc.xyz NFT gallery</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-metal-plate-with-numbers-on-it-j7mGBT2hyM8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
  
&nbsp;
