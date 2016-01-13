# macauth web
A web application for MAC address management portal with ES6 + React + Redux

# Usage

## Installation
```
$ git clone https://github.com/takanabe/macauth-web.git
$ npm install
```


## Use development server
For development server, webpack-dev-server is reasoneable. It monitors update files and rebuild them automatically. Since webpack cli command is registerd in `package.json` in this project, just type following command to run webpack-dev-server.

```
$ npm run start
```

Becareful! the webpack-dev-server rebuild files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section(Build assets), if you want need the bundled files.


## Build assets
To put compiled files into `static` directory, type the following command.

```
$ MACAUTH_SV_FQDN=[YOUR MACAUTH SERVER FQDN] npm run build
```

[YOUR MACAUTH SERVER FQDN] is FQDN such as `www.example.com` and it automatically add your macauth api server FQDN in `action/index.jsx.` by using webpack `DefinePlugin`.

