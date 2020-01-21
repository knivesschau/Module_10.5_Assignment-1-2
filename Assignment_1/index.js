'use strict';

function puppyListener() {
    console.log("puppylistener load!");
    $(".puppy-results").hide();
    $(".puppy-form").on("submit", function(event) {
        event.preventDefault(); 
        let dogNum = $("#puppy-input").val(); 
        getPupPics(dogNum);
    });
}

function getPupPics(userNum){
    console.log("getPupPics load!");
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert("Sorry, I can't show you any puppies right now :("));
}

function runGenerator() {
    console.log("Pic generator loaded! Type in a number!");
    puppyListener();
}

$(runGenerator);