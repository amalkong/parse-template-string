# parse-template-string
A simple string parser for Node JS

## How To Install
From your terminal, enter the following command
windows: 
``` powershell
npm install parse-template-string
```
unix:
``` bash
$ npm install parse-template-string
```

## How To Use
``` js
const tmpParser = require("parse-template-string");

const origStr = 'Hello World, visit my site <a href="{{ site_url }}">{{ site_name }}</a>';
const newStr = tmpParser({
	'{{ site_url }}': 'https://yoursite.me/',
	'{{ site_name }}': 'Your-Site',
}, origStr);

console.log(newStr);

// output
// 'Hello World, visit my site <a href="https://yoursite.me/">Your-Site</a>'
```
