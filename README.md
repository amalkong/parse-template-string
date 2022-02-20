# parse-template-string
A simple string parser for Node JS, which searches a string for a specific pattern and replaces it with a defined replacement variable.

## How To Install
From your terminal, enter the following command

windows: 
``` powershell
npm install parse-template-string
```

unix :
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

It is also nestable
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

const newerStr = '-- start -- , you will be -- end --';
const endStr = 'happy you did';
const finalStr = tmpParser({
	'-- start --': newStr,
	'-- end --': endStr,
}, newerStr);

console.log(finalStr);
// output
// 'Hello World, visit my site <a href="https://yoursite.me/">Your-Site</a>, you will be happy you did'
```
