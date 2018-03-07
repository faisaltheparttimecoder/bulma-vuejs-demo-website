# Introduction  [![VueJS Version](https://img.shields.io/badge/VueJS-v2-green.svg?style=flat-square)](https://vuejs.org/) [![Bulma Version](https://img.shields.io/badge/Bulma-v0.6.2-orange.svg?style=flat-square)](https://bulma.io/) [![License](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://github.com/faisaltheparttimecoder/bulma-vuejs-demo-website/blob/master/LICENSE) 
                                                                                                                           
My first hands on experience on learning the css library [Bulma](https://bulma.io/) & JS Framework [VueJS](https://vuejs.org/). 
This demo website is a way to test out the features of the two libraries.

# Demo 

Please click [here](https://bulma-vuejs-demo.herokuapp.com/) for the demo website

# Build Setup / Installation

``` 
# clone the repository
git clone https://github.com/faisaltheparttimecoder/bulma-vuejs-demo-website.git

# Navigate to the folder 
cd bulma-vuejs-demo-website

# install dependencies [ Navigate to the link https://nodejs.org/en/download/ if npm is not installed on your machine ]
npm install

# run the website locally
npm run dev

# Once started, on your browser navigate to the below URL
http://localhost:8080

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Production run

+ VueJS router has issue with the "history" mode, more details [here](https://router.vuejs.org/en/essentials/history-mode.html)
+ To fix this, the server used is "express" server and used the "connect-history-api-fallback" to fallback, the configuration is on the file "server.js" which is part of the repo.
+ After the production build ```npm run build```, run the command ```node server.js``` to start the webserver and see if all the routes work perfectly.
+ When pushing to Heroku or Cloud foundry, make sure to change the line after the build ```npm run build``` is completed in the package.json file

```"build": "node build/build.js"```

to 

```"build": "node server.js"```

# Plugins Used

Most of the code are raw vueJS & Bulma CSS (that was the intention for learning purpose). The only plugin used are

+ [ChartKick](https://www.chartkick.com/vue) for charts
+ [vuetrend](https://cinwell.com/vue-trend/) for trend lines
+ [JsonPlaceHolder](https://jsonplaceholder.typicode.com/) for all the fake data.

