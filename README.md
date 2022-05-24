# Currency Exchanger
# _Erika Mogollon_

#### By _**Erika Estefania Mogollon**_

#### Currency Exchanger.
## Technologies Used

* _Exchnage Rate API_
* _Git Bash_
* _VS Code_
* _HTML_
* _Javascript/jquery_
* _node.js_
* _npm_

## Description

_This will calculate your curency of choice and give you a result. 

## Setup/Installation Requirements

It is very easy to open, I will day this require node.js to be installed.You will also need the API key, to do this follow this next step.
  -Go to the Exchnage Rate API website. Enter your email addres, and click "Get Free Key". You will recieve and email conformation click on that link. When it is confirmed you will get your API Key.(Save it for later)

Go into your web browser of your choice.

Then clone this reposiroty to your device.

Then you will open up the folder with VSCode.

Open your teminal in VSCode and run "npm install" (wait for the documents to be installed)

Go to your IDE and run "npm install dotenv-webpack@2.0.0--save-dev" in the terminal.

Then navigate to the file webpack.config.js and add "const Dotenv= require ('dotenv-webpack')" at the top.

Next you will find the "plugins" array under "module.exports" and add "new Dotenv()" in the array.

Creat a file in your main directory called .env and add the file to your .gitignore file

Inside the .env file enter API_KEY=[your API key here].

In the terminal, type npm run start

This will open the project in your web browser

Then you can get the currency of your choice by inputting the country code of the country you want to convert to the country code you want to compare exchange rate.

## Known Bugs



## License

https://en.wikipedia.org/wiki/MIT_License

Copyright (c) _1/13/2022_ _Erika Estefania Mogollon_