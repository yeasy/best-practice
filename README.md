Best Practice
===

Best-practice config/cook-book/stack for popular tools.

There are lots of efficient tools in daily work. Collect the necessary config here.

# Content
## Pandoc

From github-style markdown to pdf: 

```sh
pandoc --toc --from markdown_github -s input.md -o output.pdf 
```


## [MongoDB](https://www.mongodb.org)
* Schema checking: [variety](https://github.com/variety/variety)
* Web UI: [mongo-express](https://github.com/andzdroid/mongo-express)

## [Nginx](nginx)
The config file usually is put under `/etc/nginx/conf.d/`.

See [default](nginx/default).

## [Node.js](https://nodejs.org)

### Framework
* For web server, use [express](https://expressjs.com).
* For REST API server, use [restify](https://restify.com).
* [Example website](website) with [babel](https://babeljs.io) and [webpack](https://webpack.github.io/).
    - Run `npm run build` to install all deps.
    - Run `npm run dev`, and access [http://localhost:8080/index.html](http://localhost:8080/index.html)

### CSS
* [bootstrap](https://getbootstrap.com/)

### HTML


## [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
REST style API design and ref framework: [Swagger](http://swagger.io/).

Useful REST framework:
* [eve](http://python-eve.org/) in python.
* [restify](https://restify.com) in Node.js.

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
