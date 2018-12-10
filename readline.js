// require
let readline = require('readline');
let axios = require('axios');

// create readline interface
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// 
let longUrls = [];
let shortenedUrls = [];

// When readline.js is run, askUserInput function will run.
function askUserInput(){
    rl.question('Input url that you want shortened with http://<your url> ', (userInput) => {
        if(userInput === 'q' || userInput === 'Q'){
            rl.close();
        } else {
            // if we dont have the users URL inside our longURL's array
            if(!longUrls.includes(userInput)){
                longUrls.push(userInput)

                // run axios post request with userInput
                axios.post(`http://tinyurl.com/api-create.php?url=${userInput}`)
                .then((response) => {
                    console.log('Response from TinyUrl: ', response.data);
                    shortenedUrls.push(response.data)
                })
                .catch((error) => {
                    console.log('Error from TinyUrl: ', error);
                })             
            } else {
                // if we have the URL that was entered in our shortened URL array
                let foundURLIndex = longUrls.indexOf(userInput);

                console.log(`URL already shortened: ${shortenedUrls[foundURLIndex]}`);
            }

            // prompt user again to input new URL to shorten
            askUserInput();
        }
    })
}
askUserInput();


