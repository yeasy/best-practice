Best Practice
===

Best-practice config/cook-book/stack for popular opensource tools.

There are lots of efficient tools in my daily work. Collect the necessary config here.

# Content
## [Nginx](nginx)
The config file usually is put under `/etc/nginx/conf.d/`.

See [default](nginx/default).

## [Node.js](https://nodejs.org)

### Framework
For web server, use [express](http://expressjs.com).
For REST API server, use [restify](http://restify.com).

### CSS

### HTML


## [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
REST style API design and ref framework: [Swagger](http://swagger.io/).

## [Security](security)
Default Iptables rules with limit port open and access ratio.
```sh
$ iptables-restore < security/iptables.rules
```

## [sysctl](sysctl)
Optimized sysctl.conf for high-performance server.

Put [sysctl.conf](sysctl/sysctl.conf) under /etc/sysctl/, and load it by
```sh
$ sysctl -p
```

## [vnc4server](vnc4server)
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
