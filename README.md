# Newscoop theme Grunt boilerplate

## What is that?

This is a Newscoop theme boilerplate for Grunt workflow.

## How it makes life easier

- You don't have to care about putting all libraries or new files in html
  - Whatever You put in assets/js/vendor folder will be merged into assets/js/dist/vendor.js
  - Whatever You put in assets/js folder will be merged into assets/js/dist/scripts.js
  - Same happens with css/less. Whatever You import in style.less file will be merged into style.css
- it speeds up website/server response
- less is really cool
- it speeds up development



## Folder structure

- /assets
  - /css
    - /components (holds files where each represents other feature)
    - /fonts
    - /vendor (third party css files)
    - style.less (container of all styles)
    - _general.less (main less file)
    - variables-mixins.less (contains less variables and mixins)
  - /img
  - /js
    - /dist (distribution ready files)
    - /vendor (third party libraries)


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

##### CSS

- less gets compiled to style.css
- style.css gets autoprefixed

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


##### Javascript

js files are merged into all.js file with sourcemap included
more about sourcemaps http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/

### Build

This one is for deployment

It does everything that "watch" task does plus it minifies css/js and increments VER_ENV for css and js versioning.

Use it before deployment.


```
grunt build
```

