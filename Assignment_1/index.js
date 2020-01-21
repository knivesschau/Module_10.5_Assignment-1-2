'use strict';

function puppyListener() {
    console.log("puppylistener load!");
    $(".puppy-form").on("submit", function(event) {
        event.preventDefault(); 
        let dogNum = $("#puppy-input").val();
        getPupPics(dogNum);
    });
}

function getPupPics(dogNum){
    console.log("getPupPics ran!");
    fetch(`https://dog.ceo/api/breeds/image/random/` + dogNum)
    .then (response => response.json())
    .then (responseJson => revealPuppies(responseJson))
    .catch (error => alert(`Sorry, I can't show you any doggies right now :(`));
}

function revealPuppies(responseJson) {
    console.log(responseJson);
    console.log("reveal puppies ran!");
    for (let i = 0; i < responseJson.messages.length; i++) {
        $(".puppy-imgs").replaceWith(`<img src="${responseJson.message[i]}" class="result-pics" alt="dog images">`);
        $(".puppy").removeClass(".hidden");
    };
} 

function runGenerator() {
    console.log("Pic generator loaded! Type in a number!");
    puppyListener();
}

$(runGenerator);