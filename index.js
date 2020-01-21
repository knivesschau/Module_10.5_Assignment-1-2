'use strict';

function puppyListener() {
    $(".puppy-form").on("submit", function(event) {
        event.preventDefault(); 
        let dogNum = $("#puppy-input").val();
        getPupPics(dogNum);
    });
}

function getPupPics(dogNum) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then (response => response.json())
    .then (responseJson => revealPuppies(responseJson))
    .catch (error => alert(`Sorry, I can't show you any doggies right now :(`));
}

function revealPuppies(responseJson) {
    console.log(responseJson);
    $(".puppy").empty();
    for (let i = 0; i < responseJson.message.length; i++) {
        $(".puppy").append(`<img src="${responseJson.message[i]}" class="result-pics" alt="puppy images">`);
        $(".puppy").removeClass("hidden");
    };
} 

function runGenerator() {
    console.log("Pic generator loaded! Type in a number!");
    puppyListener();
}

$(runGenerator);