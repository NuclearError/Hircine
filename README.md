# Hircine

Hircine: The Prince of the hunt, sport, *The Great Game*, and *The Chase*
_________________________________________________________________________
Game development

### Get Started

Having cloned or downloaded the repo, run the following:

````
npm install
npm start
````

A local version of the project can be viewed at [http://localhost:8080/index.html](http://localhost:8080/index.html). Port 8080 is the default used by webpack-dev-server. In the case that port 8080 is in use, edit the webpack dev server config file:

`node_modules\webpack-dev-server\bin\webpack-dev-server.js`

Change the port number from 8080 to any other valid port number.

### Compiling the CSS using Gulp

For this project, Gulp is used to convert Sass files to CSS. Using `gulp` on the command line will watch the files contained in the SCSS folder and compile as required. Note that this process uses gulp-ruby-sass, so you may need to install Ruby if it is not already installed.

### Unit Testing

Unit tests can be found in src/tests and use Jest with Enzyme.

To run all tests, use:

````
npm test
````

To run one test file, use:

````
npm test my-component.test.jsx
````
