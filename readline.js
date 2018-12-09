// require
let readline = require('readline');
let axios = require('axios');

// create readline interface
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// When readline.js is run, askUserInput function will run.
function askUserInput(){
    rl.question('input URL to shorten: ', (userInput) => {
        if(userInput === 'q' || userInput === 'Q'){
            rl.close();
        } else {
            console.log(`URL entered: ${userInput}`);

            // run axios post request with userInput
            axios.post(`http://tinyurl.com/api-create.php?url=${userInput}`)
            .then((response) => {
                console.log('Response from TinyUrl: ', response.data);
            })
            .catch((error) => {
                console.log('Error from TinyUrl: ', error);
            })

            askUserInput();
        }
    })
}
askUserInput();


