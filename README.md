# Hircine

Hircine: The Prince of the hunt, sport, *The Great Game*, and *The Chase*
_________________________________________________________________________
Game development using React.

### Get Started

Having cloned or downloaded the repo, run the following:

````
npm install
npm start
````

A local version of the project can be viewed at [http://localhost:8080/index.html](http://localhost:8080/index.html). Port 8080 is the default used by webpack-dev-server. In the case that port 8080 is in use, edit the webpack dev server config file:

`node_modules\webpack-dev-server\bin\webpack-dev-server.js`

Change the port number from 8080 to any other valid port number.

### The Stack

This project uses React, with [Emotion](https://emotion.sh/) for styling. Storybook is used to test and debug individual UI components. Start storybook with:

````
npm run storybook
````

This project is set up to run storybook on port 9001, because [it's over 9000!!!](http://localhost:9001)

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
