---
title: "Ansible: Restart Cisco CallManager"
description: ""
date: 2024-08-01T09:00:00+01:00
lastmod: 2024-08-01T09:00:00+01:00
image_cover: "pavan-trikutam-71CjSSB83Wo-unsplash.jpg"
categories: ["Ansible"]
authors: ["Marcel Venema"] 
tags: [""]
draft: true
---

Shutting down or restart Cisco CallManager with VMWare vSphere management console isn't a good idea. In worst case, the CallManager database will be corrupted and the only solution is to restore a backup.

<!--more-->

{{< image src="pavan-trikutam-71CjSSB83Wo-unsplash.jpg" alt="" >}}

Aside from possible corruption, restarting the Cisco CallManager manually can be a time-consuming and error-prone task, especially in large environments with multiple CUCM clusters. This is where automation tools like Ansible come into play. In this blog, we'll explore how to use Ansible to automate the restart of Cisco CallManager services, ensuring a more efficient and error-free process. 

Cisco has some great samples of how to use Ansible playbooks to read or update CallManager configurations using the Cisco CallManager AXL SOAP API.
See the https://developer.cisco.com/automation-ansible site and the Github repository https://github.com/CiscoDevNet/axl-ansible-examples. The only way to shutdown/restart Cisco CallManager is via the web GUI `Cisco Unified OS Administration - Settings - Version` and click the Restart or Shutdown button. You can also use the `utils system restart` command from the CallMananger CLI via SSH. Unfortunately, there is no AXL element to do so.

The sample on Github provides a custom Ansible module to execute CUCM CLI commands and return the output. This custom Ansible module uses Python and some other prerequisites.


```
  - name: Restart Cisco CallManager...
      cisco_vos_cli:
        cli_address: "{{ cucm_address }}"
        cli_user: "{{ cucm_username }}"
        cli_password: "{{ cucm_password }}"
        cli_command: show myself
        cli_session_end_delay: 300
        cli_timeout: 30
        cli_responses:
          - expect: "admin:"
            timeout: 10
            response: utils system restart
          - expect: 'Enter \(yes\/no\)\? '
            timeout: 10
            character_delay: 0.5
            response: "yes"
      register: restart_result
      ignore_errors: true
      no_log: true

    # Show information message
    - name: Information message
      ansible.builtin.debug:
        msg:
          - "Ignoring error on restart Cisco CallManager. Restarting CallManager. This could take up to 15 minutes..."
      when: "'Appliance is being Restarted' in restart_result.msg"


```



read or update 



Photo by <a href="https://unsplash.com/@ptrikutam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pavan Trikutam</a> on <a href="https://unsplash.com/photos/minimalist-photography-of-three-crank-phones-71CjSSB83Wo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>