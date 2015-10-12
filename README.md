# mackun2-web
A web application for mackun2(manage macaddresses and VLANs) with ES6 + React + Redux

# Usage


# Prepare development environment

## Installation
```
$ git clone git@github.com:takanabe/mackun2-web.git
$ npm install
```


## Use development server
For development server, webpack-dev-server is reasoneable. It monitors update files and rebuild them automatically. Since webpack cli command is registerd in `package.json` in this project, just type following command to run webpack-dev-server.

```
$ npm start
```

Becareful! the webpack-dev-server rebuild files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section(Build assets), if you want need the bundled files.


## Build assets
To put compiled files into `dist` directory, type the following command.

```
$ webpack
```
