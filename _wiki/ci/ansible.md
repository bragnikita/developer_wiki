---
title: Ansible
category: devops
---
[Documentation](https://docs.ansible.com/)  

#Configuration
Environment variables overrides the same variables, defined into any of the configuration files.  
* ANSIBLE_CONFIG (environment variable if set)
* ansible.cfg (in the current directory); the directory should not be world-writable
* ~/.ansible.cfg (in the home directory)
* /etc/ansible/ansible.cfg

## Inventory
### Groups
```
[ubuntu]
host0.example.org

[debian]
host[1:2].example.org

[linux:children]
ubuntu
debian
```
### Variables
We can assign variables to hosts in inventory file, host var files, group var files etc  
```
[ubuntu]
host0.example.org ansible_host=192.168.0.12 ansible_port=2222
```
Lookup order
* group_vars/linux
* group_vars/ubuntu
* host_vars/host0.example.org

## Inventory



## Playbooks
```yaml
- hosts: web
  tasks:
    - name: Installs apache web server
      apt:
        pkg: apache2
        state: present
        update_cache: true
```

#Command line options
## ansible
* -a 'args' - pass arguments to the module
* -i path - path to the inventory
* -m module_name
* -t DIR - save contents of the output in the DIR
* -u USERNAME
`ansible -i hosts.cfg -m shell -a 'uname -a' <hostname>` - run `uname -a` on the `<hostname>`  
`ansible -i step-02/hosts -m shell -a 'grep DISTRIB_RELEASE /etc/lsb-release' all` - run on all hosts  

## ansible-playbook
`ansible-playbook -i hosts.cfg -l <hostname> <playbook file>`
