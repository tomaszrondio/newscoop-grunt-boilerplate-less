# Newscoop theme Grunt boilerplate

## What is that?

This is a Newscoop theme boilerplate with Grunt workflow.

## How to install
You need node.js, npm and grunt CLI.

- install node from http://nodejs.org/
- node comes with npm installed but it is wise to update it to latest version.
Just type in Your console/terminal
```
sudo npm install npm -g
```

- install Grunt CLI
```
sudo npm install -g grunt-cli
```


Clone/Copy this repository and run
```
sudo npm install
```
All dependencies are now installed and You are ready to start using Grunt magic.
Note that it created "node_modules" folder if You didn't have it before.

### Important!

Add these to Your .gitignore file
```
node_modules/
.grunt
```

## Tasks

### Watch
This one is prepared for development process.

Type 'grunt watch' in console and forget about it. It does it's magic automatically.

It watches for changes in less and js files.

- less gets compiled to style.css
- - style.css gets autoprefixed

Just write regular css code and Autoprefixer will add prefixes for old browsers.

css:
```
a{
  transition: all 0.3s;
}
```
output:
```
a{
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
```



- js files are merged to two files:
- - vendor.js with all third party libraries (jQuery, it's plugins, bootstrap.js etc.) from assets/js/vendor folder.
- - scripts.js with custom js from assets/js folder

### Build
This one is for deployment
```
grunt build
```