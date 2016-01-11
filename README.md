Best Practice
===

Best-practice config/cook-book for popular tools.

# Content
## nginx
The config file usually is put under `/etc/nginx/conf.d/`.

For example, [default](nginx/default).

## security
Default Iptables rules with limit port open and access ratio.
```sh
$ iptables-restore < security/iptables.rules
```

## vnc4server
### Config file
The config file is [${HOME}/.vnc/xstartup](vnc4server/xstartup).
### Start some server
Let it listen on 1.
```sh
vncserver :1
```
### Kill some server
Kill the server listening on 1.
```sh
$ vncserver -kill :1
```
### Set password
```sh
$ vncpasswd
```

# Contribution
* `fork` this project to your repo, like `user/best-practice`, then clone to local.
```
$ git clone git@github.com:user/best-practice.git
$ cd best-practice
$ git config user.name "User"
$ git config user.email user@email.com
```

* Make some changes, commit and push to your Github repo.
```
$ #do some change on the content
$ git commit -am "Fix issue #1: change helo to hello"
$ git push
```

* Open GitHub and make a pull request.
* Remember to sync your repo often with my latest version.
```
$ git remote add upstream https://github.com/yeasy/best-practice
$ git fetch upstream
$ git checkout master
$ git rebase upstream/master
$ git push -f origin master
```
