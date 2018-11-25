# Screen Shot
![screenshot](https://raw.githubusercontent.com/efeiefei/node-file-manager/master/example/screenshot.png)

# What I will do(by forker dty717)
This project remind me using node is the fastest way to set up a web site of managing the file system.
There is one thing I don't agree with, that is angularjs, for its speed is quite quick enough and I am not familiar with it.
So, I will remove the angularjs.


# Usage

```sh
  npm install -g node-file-manager
  node-file-manager -p 8080 -d /path/to/
```

Or

```sh
  git clone https://github.com/dty717/node-file-manager.git
  cd node-file-manager
  npm i
  cd lib
  node --harmony index.js -p 8080 -d /path/to
```

We can run node-file-manager in terminal directly. We can specify prot add data root dir by `-p` and `-d`, default with 5000 and scripts directory.

Then, we can view localhost:8080/ in our browr.
