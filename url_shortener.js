let readline = require('readline');
let axios = require('axios');
let cache = require('persistent-cache');

// create readline interface
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Persistent cache of shortened URL's to disk
let shortUrls = cache();

// Arrays used to store urls 
let longUrls = [];
let shortenedUrls = [];

// When readline.js is run, askUserInput function will run.
function askUserInput(){

    rl.question('Input url that you want shortened with http://<your url> ', (userInput) => {
        if(userInput === 'q' || userInput === 'Q'){
            cachedData();
            rl.close();
        } else {
            // if we dont have the users URL inside our longURL's array
            if(!longUrls.includes(userInput)){
                longUrls.push(userInput)
                // run axios post request with userInput to tinyUrl
                axios.post(`http://tinyurl.com/api-create.php?url=${userInput}`)
                .then((response) => {
                    console.log('Response from TinyUrl: ', response.data);
                    shortenedUrls.push(response.data);

                    // stores shortened urls into the cache
                    shortUrls.putSync('short', shortenedUrls);
                })
                .catch((error) => {
                    console.log('Error from TinyUrl: ', error);
                })             
            } else {
                // if we have the URL that was entered in our shortened URL array
                let foundURLIndex = longUrls.indexOf(userInput);
                console.log(`URL already shortened: ${shortenedUrls[foundURLIndex]}`);
            }
            // continuously prompt user to input new URL's to shorten
            askUserInput();
        }
    })
}
askUserInput();


// returns all cached URLs
function cachedData(){
    shortUrls.get('short', (err, urls) => {
        if(err){
            console.log('Err retrieving from cache');
        } else {
            console.log('Shortened urls stored in cache: ', urls);
        }
    })
}
