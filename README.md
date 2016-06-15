# JavaScript Modern JS Apps Independent project

#### 05/27/2016

#### By Scott Holland, Jr.

## Description

GibHub search app for Epicodus JavaScript course, week 1 Code Review (Modern JS Apps).

## Setup/Installation Requirements

* Clone or download this repository to your Github account
* Create a project directory on your computer
* Have Node.js installed on your computer
* In your terminal run **npm install, bower install, gulp build, and gulp serve**
* A local web server should automatically open in your browser with the website loaded if you have a browser open

## API Key Setup Requirements

* Create a file in the top level of your project directory called .env file to hold your API key. Paste your API key in your .env file that you just created and store it in an exported property named apiKey.
* Here's an .env (hidden file) file example: exports.apiKey = "YOUR-API-KEY-GOES-HERE";
* Make sure to add the following to your .js file using the API key: var apiKey = require('./../.env').apiKey;

## Future Improvements

Show full name, avatar picture, email address and number of followers of the queried user.

## Technologies Used

HTML, CSS, Bootstrap, Node.js, node_modules, Bower, GitHub API

### License

*MIT license*

Copyright (c) 2016 Scott Holland, Jr.
