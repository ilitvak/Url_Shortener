Url_Shortener
===========

Simple application that will output a shorter url than the one that it received. 

Built With
----------
* [Node](https://nodejs.org/en/)
* [TinyURL](https://tinyurl.com/)
* [Mocha](https://www.npmjs.com/package/mocha)
* [Chai](https://www.npmjs.com/package/chai)
* [persistent-cache](https://www.npmjs.com/package/persistent-cache) - npm
* [readline](https://www.npmjs.com/package/readline) - npm
* [axios](https://www.npmjs.com/package/axios) - npm

Configuration
-------------

Start by cloning this repository in your terminal
```
$ git clone https://github.com/ilitvak/Url_Shortener.git
```
```
run npm install inside of the Url_Shortener directory.
```
```
run npm install node if you don't have it already. I am currently on - v10.14.1
```
```
run npm install mocha. I had permission issues, so I had to resort to installing it globally (sudo npm install -g mocha), but if you can just install it locally to your project.
```

Running the Application
-----------------------

```
cd into the Url_Shortener directory.
```
```
run node url_shortener.js
```

```
Follow the prompts to input a URL that you want shortened.
```

```
Once you have input desired number of URLs to shorten, hit q or Q to exit the process.
```

```
This will then show you a cached display of all of previous queries, both original and shortened.
```

Unit Testing
-------------

```
Once you have exited out of the url_shortener.js process, run mocha inside of the same terminal.
```


